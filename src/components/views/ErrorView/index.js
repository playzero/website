import React from 'react'

import {
	PageTemplate,
	Header,
	Footer,
	Heading
} from 'components'

const ErrorView = () => {
  return (
    <PageTemplate
    	header={<Header />}
    	footer={<Footer />}
    	title='Ooops...'
    	>
      <Heading>An error has occured.</Heading>
    </PageTemplate>
  )
}

export default ErrorView
