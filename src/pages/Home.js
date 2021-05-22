import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Menu from '../components/Menu'

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Menu />

      <View style={styles.images}>
        <Image
          style={styles.centerImage}
          source={require('../assets/images/girl-smile.jpg')}
        />
        <Image
          style={styles.sideImage}
          source={require('../assets/images/girl-eyes.jpg')}
        />
      </View>

      <View style={styles.textName}>
        <Text style={styles.title}>Gioconda Rizzo</Text>
        <Text style={styles.subtitle}>Fotografia</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Veja todas as fotos</Text>
        <TouchableOpacity
          activeOpacity={.6}
          onPress={() => props.navigation.navigate('Photos')}
        >
          <FontAwesome
            name="long-arrow-right" size={32} color="#F6F6F6"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  images: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  centerImage: {
    width: 226,
    height: 278,
    marginLeft: 20
  },
  sideImage: {
    width: 90,
    height: 401
  },
  textName: {
    width: 232,
    height: 63,
    marginLeft: 14,
    marginTop: -100
  },
  title: {
    fontSize: 40,
    textAlign: 'right',
    fontFamily: 'AbhayaLibre_500Medium'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'AbhayaLibre_500Medium'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 360,
    height: 83,
    backgroundColor: '#161616',
    position: 'absolute',
    marginTop: Dimensions.get('window').height - 83
  },
  footerText: {
    color: '#F6F6F6',
    fontSize: 24,
    marginLeft: 20,
    fontFamily: 'AbhayaLibre_500Medium'
  },
  icon: {
    padding: 0,
    marginRight: 20,
    marginTop: 6
  }
})