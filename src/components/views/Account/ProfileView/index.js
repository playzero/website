import React from 'react'

import {
	PageTemplate,
	Header,
	Footer,
	Heading
} from 'components'

const ProfileView = () => {
  return (
    <PageTemplate
    	header={<Header />}
    	footer={<Footer />}
    	title='Profile'
    	>
    </PageTemplate>
  )
}

export default ProfileView
