import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { TransitionGroup } from 'react-transition-group/TransitionGroup'
import { AnimatedWrapper } from 'containers/AnimatedWrapper'
import { firstChild } from 'utils/helpers';

import asyncComponent from '../asyncComponent';

const HomeView = asyncComponent(
	() => import('../components/views/HomeView')
	.then(module => module.default),
	{ name: 'HomeView' }
);

import {
	// HomeView,
	AboutView,
	ProjectPitchView,
	GamesView,
	IdeaView,
	DevView,
	RegistrationView,
	LoginView,
	DashboardView,
	ErrorView
} from 'components'

export default (
	<Switch>
		<Route path="/" exact component={HomeView} />
		<Route path="/pitch" component={ProjectPitchView} />
		<Route path="/play" component={GamesView} />
		<Route path="/idea" component={IdeaView} />
		<Route path="/dev*" component={DevView} />
		<Route path="/apply" component={RegistrationView} />
		<Route path="/login" component={LoginView} />
		<Route path="/about" component={AboutView} />
		<Route path="/dashboard" component={DashboardView} />
		<Route component={ErrorView} />
	</Switch>
)


// export default (
// 	<Switch>
// 		<Route path="/" exact component={HomeView} />
// 		<Route path="/pitch" component={ProjectPitchView} />
// 		<Route path="/play" component={GamesView} />
// 		<Route path="/idea" component={IdeaView} />
// 		<Route path="/dev*" component={DevView} />
// 		<Route path="/apply" component={RegistrationView} />
// 		<Route path="/login" component={LoginView} />
// 		<Route path="/about" component={AboutView} />
// 		<Route path="/dashboard" component={DashboardView} />
// 		<Route component={ErrorView} />
// 	</Switch>
// )
