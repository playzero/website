// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { AboutView } from 'components'

storiesOf('AboutView', module)
  .add('default', () => (
    <AboutView />
  ))
