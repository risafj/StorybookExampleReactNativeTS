import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Colors from '../../styles/Colors'
import FastImage from 'react-native-fast-image'

interface Props {
  name: string
  style?: ViewStyle
  size?: 'sm' | 'md' | 'lg'
  hasBackground?: boolean
}

export const Gravatar = React.memo(({ name, style, size = 'lg', hasBackground = true }: Props) => {
  const srcUrl = `https://robohash.org/${name}?set=set4`

  const appliedStyles = [styles.root, style]
  if (size === 'sm') appliedStyles.push(styles.sm)
  if (size === 'md') appliedStyles.push(styles.md)
  if (size === 'lg') appliedStyles.push(styles.lg)
  if (!hasBackground) appliedStyles.push(styles.noBackground)

  return (
    <View style={ appliedStyles }>
      {
        name.length !== 0
          ? (<FastImage source={ { uri: srcUrl } } style={ styles.gravatarImage } />)
          : (<></>)
      }
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.backgroundGray,
    justifyContent: 'center',
    padding: 10
  },
  sm: {
    borderRadius: 120/2,
    width: 60,
    height: 60,
  },
  md: {
    borderRadius: 160/2,
    width: 80,
    height: 80,
  },
  lg: {
    borderRadius: 200/2,
    width: 100,
    height: 100,
  },
  gravatarImage: {
    width: '100%',
    height: '100%'
  },
  noBackground: {
    backgroundColor: 'transparent'
  }
})
