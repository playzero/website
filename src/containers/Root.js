import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// does not work yet:
// import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import DevTools from './DevTools'
import { showDevTools } from '../config'

import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from 'components/themes/default'

injectGlobal`
	body {
		margin: 0;
	}
`

 const Root = ({store, history}) => {
	return (
		<Provider store={store}>
			<div>
				<BrowserRouter history={history}>
					<ThemeProvider theme={theme}>
					{	Routes }
					</ThemeProvider>
				</BrowserRouter>
				{ showDevTools && <DevTools /> }
			</div>
		</Provider>

	)
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default Root
