import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Modal
} from 'react-native'

export default function ModalImg({isVisible, callbackParent, urlItem}) {

  return (
    <View style={styles.modal}>
      <Modal
        animationType='side'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          callbackParent(false)
        }}
      >
        <Image
          source={{ uri: urlItem }}
          style={styles.modalImg}
          resizeMethod={'auto'}
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalImg: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    backgroundColor: '#161616'
  },
})