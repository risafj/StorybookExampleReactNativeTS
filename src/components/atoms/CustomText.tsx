import React from 'react'
import { Text, TextStyle, TextProps } from 'react-native'
import Colors from '../../styles/Colors'
import FontSizes from '../../styles/FontSizes'

type Props = {
  fontSize?: 'header' | 'subHeader' | 'default' | 'small'
  fontWeight?: 'normal' | 'bold'
  color?: string
  style?: TextStyle
  children: string
} & TextProps

export const CustomText = ({ fontSize = 'default', fontWeight = 'normal', color = Colors.text, children, style, ...props }: Props) => {

  const styles: TextStyle[] = [{ fontSize: FontSizes[fontSize], fontWeight, color }]
  if (style) styles.push(style)

  return (
    <Text style={ styles } { ...props }>
      { children }
    </Text>
  )
}
