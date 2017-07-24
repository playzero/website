// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { HomeView } from 'components'

storiesOf('HomeView', module)
  .add('default', () => (
    <HomePage />
  ))
