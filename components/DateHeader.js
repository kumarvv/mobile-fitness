import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { purple } from '../utils/colors'

export default function UdaciSlider({ date }) {
  return (
    <Text style={{color: purple, fontSize: 25, paddingTop: 25}}>{date}</Text>
  )
}
