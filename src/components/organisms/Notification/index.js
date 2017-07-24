import React from 'react'

import {
  Alert,
  Button
} from 'react-bootstrap'

const Notification = () => {

  const getInitialState = () => {
    return {
      alertVisible: false
    };
  }

  const handleAlertDismiss = () => {
    setState({alertVisible: false});
  }

  const handleAlertShow = () => {
    setState({alertVisible: true});
  }

  // if (this.state.alertVisible) {



    return (
      <Alert bsStyle="danger" onDismiss={handleAlertDismiss}>
        <h4>Oh snap! You got an error!</h4>
        <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
        <p>
          <Button bsStyle="danger">Take this action</Button>
          <span> or </span>
          <Button onClick={handleAlertDismiss}>Hide Alert</Button>
        </p>
      </Alert>
    )

  // }

  // return (
  //   <Button onClick={this.handleAlertShow}>Show Alert</Button>
  // )

}

export default Notification


