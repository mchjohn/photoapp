import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const platform = Platform.OS == 'android' ? 40 : 60

export default function Menu() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={.6}
      onPress={() => navigation.openDrawer()}
    >
      <View style={styles.menu}>
        <View style={styles.ups}>
          <View style={styles.upLeft} />
          <View style={styles.upRight} />
        </View>

        <View style={styles.downs}>
          <View style={styles.downLeft} />
          <View style={styles.downRight} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: platform,
    marginLeft: 20
  },
  menu: {
    width: 30,
    height: 30
  },
  ups: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  downs: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  upLeft: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#161616'
  },
  upRight: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#161616'
  },
  downLeft: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#161616'
  },
  downRight: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#161616'
  }
})