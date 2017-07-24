import React, { Component } from 'react'

import {
	LandingPageTemplate,
	Header,
	LandingPageTeaser,
	Footer,
	Heading,
	NetworkChart
} from 'components'

// import { AnimatedWrapper } from 'containers/AnimatedWrapper'

// @AnimatedWrapper
class HomeView extends Component {

	render() {
		return (
			<LandingPageTemplate
				header={<Header />}
				teaser={<LandingPageTeaser />}
				footer={<Footer />}
				>
				<NetworkChart />
			</LandingPageTemplate>
		)
	}
}

// const HomeView = AnimatedWrapper(HomeViewContainer);
export default HomeView
