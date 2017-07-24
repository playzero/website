import React from 'react'

import {
  PageTemplate,
  Header,
  Footer
} from 'components'

const AboutView = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
      title='About us'
      >
      <h1>Vision</h1>
    </PageTemplate>
  )
}

export default AboutView
