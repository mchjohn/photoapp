import React from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

export default function ModalMessage({isVisible, callbackParent, nav} ) {
  return (
    <View>
      <Modal
        animationType='side'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          callbackParent(false)
        }}
      >
        <View style={styles.button}>
          <TouchableOpacity
            activeOpacity={.6}
            onPress={() => nav.navigation.navigate('Home')}
          >
            <FontAwesome
              name="close" size={40} color="#161616"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.message}>
          <Text style={styles.text}>Mensagem Enviada!</Text>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F6F6F6',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 20,
    marginTop: 20
  },
  message: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F6F6'
  },
  text: {
    fontFamily: 'AbhayaLibre_500Medium',
    fontSize: 28
  }
})