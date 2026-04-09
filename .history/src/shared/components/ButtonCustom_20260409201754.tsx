import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonCustomProps } from '../types/types'

const ButtonCustom = ({title, onPress}: ButtonCustomProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({})