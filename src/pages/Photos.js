import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
  ActivityIndicator
} from 'react-native'

import Menu from '../components/Menu'
import ModalImg from '../components/ModalImg'

const platform = Platform.OS == 'android' ? 30 : 50

export default function Photos(props) {

  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [urlItem, setUrlItem] = useState('')

  useEffect(() => {
    fetch('https://appphoto-api.herokuapp.com/photos')
    .then(response => response.json())
    .then(json => setData(json.photos))
    .catch(error => console.warn(error))
    .finally(() => setLoading(false))
  }, [])

  function showModal(){
    setIsVisible(true)
  }

  function closeModal(bool) {
    setIsVisible(bool)
  }

  function getItemUrl(urlItem) {
    setUrlItem(urlItem)
  }

  function showImg(id, item, index) {
    if(index % 2 == 0) {
      return (
        <Image source={{ uri: item.url }} style={styles.img1} />
      )
    } else {
      return (
        <Image source={{ uri: item.url }} style={styles.img2} />
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.ajust}>
        <Menu />

        <View style={styles.textName}>
          <Text style={styles.title}>Gioconda Rizzo</Text>
          <Text style={styles.subtitle}>Fotografia</Text>
        </View>
      </View>
      
      <ModalImg
        isVisible={isVisible}
        callbackParent={(bool) => closeModal(bool)}
        urlItem={urlItem}
      />

      {isLoading ? <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="#161616" /> :
        
        <FlatList
          data={data}
          horizontal={false}
          numColumns={2}
          keyExtractor={({id}, index) => id}
          renderItem={({item, id, index}) => {
            return (
              <View style={styles.images}>
                <TouchableOpacity
                  activeOpacity={.7}
                  onPress={() => {
                    showModal()
                    getItemUrl(item.url)
                  }}
                >
                  {showImg(id, item, index)}
                </TouchableOpacity>
              </View>
            )
          }}
        />

      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ajust: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textName: {
    marginTop: platform,
    marginRight: 7,
    width: 232
  },
  title: {
    fontSize: 40,
    textAlign: 'right',
    fontFamily: 'AbhayaLibre_500Medium'
  },
  subtitle: {
    fontSize: 20,
    marginTop: -5,
    textAlign: 'right',
    fontFamily: 'AbhayaLibre_500Medium'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },
  img1: {
    width: 221,
    height: 179,
    marginHorizontal: 2,
    marginVertical: 0,
    borderRadius: 3
  },
  img2: {
    width: 131,
    height: 179,
    marginHorizontal: 2,
    marginVertical: 0,
    borderRadius: 3
  },
})