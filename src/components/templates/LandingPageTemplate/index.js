// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { size } from 'styled-theme'

const Wrapper = styled.div`
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

const Teaser = styled.section`
	height: 100vh;
	background: black no-repeat;
	background-size: cover;
	background-image: url('/maxheadroom.png');
`

const Content = styled.section`
	width: 100%;
	box-sizing: border-box;
	margin: 2rem auto;
	max-width: ${size('maxWidth')};
`

const Footer = styled.footer`
	margin-top: auto;
`

const LandingPageTemplate = ({ header, teaser, children, footer, ...props }) => {

	console.log('landing page.')

	return (
		<Wrapper {...props}>
			<Header>{header}</Header>
			<Teaser>{teaser}</Teaser>
			{ children && <Content>{children}</Content> }
			<Footer>{footer}</Footer>
		</Wrapper>
	)
}

LandingPageTemplate.propTypes = {
	header: PropTypes.node.isRequired,
	teaser: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
	children: PropTypes.any
}

export default LandingPageTemplate
