import React from 'react'

import {
	PageTemplate,
	Header,
	Footer,
	Heading
} from 'components'

const SettingsView = () => {
  return (
    <PageTemplate
    	header={<Header />}
    	footer={<Footer />}
    	title='Settings'
    	>
      <Heading>An error has occured.</Heading>
    </PageTemplate>
  )
}

export default SettingsView
