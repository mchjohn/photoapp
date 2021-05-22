import React, { useState } from 'react'
import { DrawerItem } from '@react-navigation/drawer'

export default function Contact() {
  return (
    <DrawerItem
      options={{
        drawerIcon: () => (
          <FontAwesome name="home" size={32} />
        )
      }}
    />
  )
}