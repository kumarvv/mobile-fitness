import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Hello = () => (
  <View>
    <Text>Hello!</Text>
  </View>
)

const Goodbye = () => (
  <View>
    <Text>Goodbye!</Text>
  </View>
)

const Tabs = TabNavigator({
  Hello: {
    screen: Hello,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='home' size={30}/>
    }
  },
  Goodbye: {
    screen: Goodbye,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='dashboard' size={30}/>
    }
  }
})

export default Tabs
