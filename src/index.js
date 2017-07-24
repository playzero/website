import 'react-hot-loader/patch'

import React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader';
import Root from 'containers/Root'

import { configureStore, history } from 'store/configureStore';
const store = configureStore();

// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

// import {
//   cognito,
//   createGuard,
//   PasswordReset,
//   performLogin,
//   setupCognito,
// } from 'react-cognito';




// import { AUTH_USER } from './actions/types/auth';

// thunk variant
// const renderApp = () => (
// 	<BrowserRouter basename={basename}>
// 		<App />
// 	</BrowserRouter>
// )

// const app = () => (
// 	<AppContainer>
// 		<App />
// 	</AppContainer>
// )
// const root = document.getElementById( 'app' )
//
render(
	<AppContainer>
		<Root store={store} history={history} />
	</AppContainer>, document.getElementById( 'app' )
)

// if (module.hot) {
// 	module.hot.accept('containers/App', () => {
// 		require('containers/App')
// 		render(renderApp(), root)
// 	})
// }

if (module.hot) {
    module.hot.accept('containers/Root', () => {

        const newConfigureStore = require('store/configureStore')
        const newStore = newConfigureStore.configureStore()
        const newHistory = newConfigureStore.history
        const NewRoot = require('containers/Root').default

        render(
            <AppContainer>
                <NewRoot store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById( 'app' )
        )

    })
}
