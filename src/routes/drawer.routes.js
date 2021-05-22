import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { FontAwesome } from '@expo/vector-icons'

import Home from '../pages/Home'
import Photos from '../pages/Photos'
import Contact from '../pages/Contact'
import Social from '../components/Social'

const Drawer = createDrawerNavigator()

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#F6F6F6'
      }}
      drawerContentOptions={{
        activeTintColor: '#FFF',
        activeBackgroundColor: '#161616',
        inactiveTintColor: '#000',
        labelStyle: {
          fontSize: 22,
          fontFamily: 'AbhayaLibre_500Medium',
          letterSpacing: 1
        }
      }}
    >
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({focused}) => (
            <FontAwesome
              name="home" size={32} color={focused ? '#FFF' : '#000'}
            />
          )
        }}
      />
      <Drawer.Screen
        name='Photos'
        component={Photos}
        options={{
          title: 'Fotos',
          drawerIcon: ({focused}) => (
            <FontAwesome
              name="photo" size={32} color={focused ? '#FFF' : '#000'}
              
          />
          )

        }}
      />
      <Drawer.Screen
        name='Contact'
        component={Contact}
        options={{
          title: 'Contato',
          drawerIcon: ({focused}) => (
            <FontAwesome
              name="whatsapp" size={32} color={focused ? '#FFF' : '#000'}
              
          />
          )

        }}
      />
    </Drawer.Navigator>
  )
}