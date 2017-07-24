import React from 'react'

import {
	PageTemplate,
	Header,
	Footer,
	Heading
} from 'components'

const TFAView = () => {
  return (
    <PageTemplate
    	header={<Header />}
    	footer={<Footer />}
    	title='Two Factor Authentication'
    	>
      <p>Please enter the code you have received on your authenticationd device:</p>
    </PageTemplate>
  )
}

export default TFAView
