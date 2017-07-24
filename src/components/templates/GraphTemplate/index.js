// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { size } from 'styled-theme'

import {
	Heading
} from 'components'

const Wrapper = styled.div`
  background-color: #111;
  color: #eee;
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Notification = styled.section``

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  // max-width: ${size('maxWidth')};
`

const Footer = styled.footer`
  margin-top: auto;
`

const PageTemplate = ({ header, notification, hero, title, children, footer, reverse, ...props }) => {

	console.log('regular page.')

  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {notification && <Notification>{notification}</Notification>}
      <Content reverse>
      	{title && <Heading level={1}>{title}</Heading>}
      	{children}
      </Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  notification: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any,
  reverse: PropTypes.bool
}

PageTemplate.defaultProps = {
	notification: false,
	reverse: false
}

export default PageTemplate
