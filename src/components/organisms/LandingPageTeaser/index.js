import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Button,
  // Newsletter
} from 'react-bootstrap'

	  // <Newsletter />
class LandingPageTeaser extends Component {

	render() {

	  return (

	    <div className="landingpage-image">
	      <p><Button bsStyle="primary">Learn more</Button></p>
	    </div>

	  )

	}
}

// function mapStateToProps(state) {

// 	return {
// 		// errorMessage: state.auth.error,
// 		// message: state.auth.message
// 	};

// }

// export default connect( mapStateToProps, {} )(LandingPageTeaser)

export default LandingPageTeaser


