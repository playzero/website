import React from 'react'

import styled from 'styled-components'
// import { size } from 'styled-theme'

import {
	Grid,
	Row,
	Col,
	Clearfix
} from 'react-bootstrap'

import {
	Heading,
	Link,
	Button
} from 'components'

const col = 'The quick brown fox jumps over the lazy dog.'

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<div className="Footer">
			<Grid>
				<Row className="FooterRow">
					<Col sm={6} md={3}>
						<Button>Newsletter</Button>
					</Col>
				</Row>
				<Row className="FooterRow">
					<Col sm={6} md={3}>
						<Heading level={3} reverse>
 							<img src='/zero_titanium_1024x256.png' height='25px' />
						</Heading>
					</Col>
					<Clearfix visibleXsBlock><hr /></Clearfix>
					<Col sm={6} md={3}>
						<Heading level={3} reverse>Resources</Heading>
					</Col>
					<Clearfix visibleXsBlock visibleSmBlock><hr /></Clearfix>
					<Col sm={6} md={3}>
						<Heading level={3} reverse>Connect</Heading>
					</Col>
					<Clearfix visibleXsBlock><hr /></Clearfix>
					<Col sm={6} md={3}>
						<Heading level={3} reverse>Legal</Heading>
						<ul>
							<li><Link>Terms of use</Link></li>
							<li><Link>Privacy Policy</Link></li>
							<li><Link>Service Fees</Link></li>
							<li><Link>Customer Care</Link></li>
							<li><Link>Imprint</Link></li>
						</ul>
					</Col>
				</Row>
				<Row className="FooterRow">
					<p className="copyright">© {currentYear} zero.io. made on earth.</p>
				</Row>
			</Grid>
		</div>
	)
}

export default Footer
