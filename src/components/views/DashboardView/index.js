import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	GraphTemplate as Wrapper,
	Header,
	Footer,
	Heading,
	SystemOverview
} from 'components'

class DashboardView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
		  <Wrapper
		  	header={<Header />}
		  	footer={<Footer />}
		  	title='DashboardView'
		  	>
		  	<SystemOverview />
		  </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
  	content: state.auth.content
  };
}

export default connect(
	mapStateToProps
)(DashboardView);
