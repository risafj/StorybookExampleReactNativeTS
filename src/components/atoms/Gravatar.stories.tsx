import { Gravatar } from './Gravatar'
import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../storybook/stories/CenterView'
import { text } from '@storybook/addon-knobs'
import React from 'react'

const nameKnob = () => text('name', 'Risa')

storiesOf('Atoms/Gravatar', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('sm', () => (
    <Gravatar size="sm" name={ nameKnob() } />
  ))
  .add('md', () => (
    <Gravatar size="md" name={ nameKnob() } />
  ))
  .add('lg', () => (
    <Gravatar size="lg" name={ nameKnob() } />
  ))
  .add('no background', () => (
    <Gravatar size="lg" name={ nameKnob() } hasBackground={ false } />
  ))
