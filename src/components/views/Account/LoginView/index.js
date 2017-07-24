import React from 'react'

import {
	PageTemplate,
	Header,
	Footer,
	Heading
} from 'components'

const LoginView = () => {
  return (
    <PageTemplate
    	header={<Header />}
    	footer={<Footer />}
    	title='Login'
    	>
    	<p>Hello.</p>
    </PageTemplate>
  )
}

export default LoginView
