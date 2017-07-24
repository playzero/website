import React from 'react'

import {
  Heading,
  BarGraph
} from 'components'

import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div``

const NetworkChart = () => {
  return (
    <Wrapper>
      <Heading>Current Network Penetration</Heading>
      <BarGraph />
    </Wrapper>
  )
}

export default NetworkChart
