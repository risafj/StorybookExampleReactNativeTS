import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../storybook/stories/CenterView'
import React from 'react'
import { CustomText } from './CustomText'
import Colors from '../../styles/Colors'

storiesOf('Atoms/CustomText', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('default', () => (
    <CustomText >Default size, default font weight</CustomText>
  ))
  .add('bold', () => (
    <CustomText fontWeight="bold">Bold text</CustomText>
  ))
  .add('with color', () => (
    <CustomText color={ Colors.primaryStrong }>Specified color</CustomText>
  ))
  .add('header', () => (
    <CustomText fontSize="header">Header</CustomText>
  ))
  .add('sub header', () => (
    <CustomText fontSize="subHeader">Sub header</CustomText>
  ))
  .add('small', () => (
    <CustomText fontSize="small">Small text</CustomText>
  ))
