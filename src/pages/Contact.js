import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  Linking,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import { Input } from 'react-native-elements'
// import Linking from 'expo-linking'

import Menu from '../components/Menu'
import ModalMessage from '../components/ModalMessage'

const platform = Platform.OS == 'android' ? 30 : 50

export default function Contact(props) {
  const [name, setName] = useState(null)
  const [telephone, setTelephone] = useState(null)
  const [message, setMessage] = useState(null)

  const [errorName, setErrorName] = useState(null)
  const [errorTelephone, setErrorTelephone] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const [isVisible, setIsVisible] = useState(false)

  const url = `whatsapp://send?text=*Mensagem de:* ${name}\n*Mensagem:* ${message}&phone=+5521996304893`

  const validation = () => {
    let error = false

    setErrorName(null)
    setErrorTelephone(null)
    setErrorMessage(null)

    if(name == null) {
      setErrorName("Preencha seu nome.")
      error = true
    }

    const phone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    if(!phone.test(String(telephone))) {
      setErrorTelephone("Preencha seu telefone.")
      error = true
    }
    if(message == null) {
      setErrorMessage("Insira uma mensagem.")
      error = true
    }

    return !error;
  }

  const showModal = () => {
    setTimeout(() => {
      setIsVisible(true)
      setName(null)
      setTelephone(null)
      setMessage(null)
    }, 3000)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

  const save = () => {
    if(validation()) {
      Linking.openURL(url)
      showModal()
    }
  }

  return (
    <View style={styles.container}>

      <KeyboardAvoidingView
        behavior="position" enabled
        keyboardVerticalOffset={-150}
      >
        <View style={styles.header}>
          <Menu />

          <View style={styles.textName}>
            <Text style={styles.title}>Gioconda Rizzo</Text>
            <Text style={styles.subtitle}>Fotografia</Text>
          </View>

          <Image
            style={styles.bgImage}
            source={require('../assets/images/girl-smile-cut-2.png')}
          />
        </View>

        <View style={styles.form}>
          <Input
            style={styles.inputName}
            onChangeText={name => {
              setName(name)
              setErrorName(null)
            }}
            value={name}
            maxLength={20}
            placeholder={"Digite seu nome"}
            textContentType={'name'}
            errorMessage={errorName}
          />
          <Input
            style={styles.inputTelephone}
            onChangeText={telephone => {
              setTelephone(telephone)
              setErrorTelephone(null)
            }}
            value={telephone}
            maxLength={20}
            placeholder={"Digite o número do telefone"}
            textContentType={'telephoneNumber'}
            keyboardType="phone-pad"
            errorMessage={errorTelephone}
            returnKeyType="done"
          />
          <Input
            style={styles.inputMessage}
            onChangeText={message => {
              setMessage(message)
              setErrorMessage(null)
            }}
            value={message}
            maxLength={1000}
            placeholder={"Digite sua mensagem"}
            textContentType={'none'}
            multiline={true}
            returnKeyType="done"
            errorMessage={errorMessage}
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => save()}
            accessibilityLabel="Enviar mensagem"
            style={styles.button}
          >
            <Text style={styles.buttonTxt}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <ModalMessage isVisible={isVisible} callbackParent={closeModal} nav={props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  bgImage: {
    width: '100%',
    marginTop: platform - 30
  },
  textName: {
    width: 232,
    marginRight: 20,
    marginTop: platform
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
  form: {
    marginTop: 40,
    alignItems: 'center',
  },
  inputName: {
    width: '90%',
    height: 30,
    borderColor: '#161616',
    fontSize: 22,
    fontFamily: 'AbhayaLibre_500Medium'
  },
  inputTelephone: {
    width: '90%',
    height: 30,
    borderColor: '#161616',
    fontSize: 22,
    marginTop: 20,
    fontFamily: 'AbhayaLibre_500Medium'
  },
  inputMessage: {
    width: '90%',
    height: 150,
    borderColor: '#161616',
    fontSize: 22,
    marginTop: 30,
    textAlignVertical: 'top',
    fontFamily: 'AbhayaLibre_500Medium'
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  },
  button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161616',
    borderRadius: 3,
    paddingVertical: 12
  },
  buttonTxt: {
    color: '#F6F6F6',
    fontSize: 24,
    letterSpacing: 2,
    fontFamily: 'AbhayaLibre_500Medium'
  }
})