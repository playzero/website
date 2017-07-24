import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { registerNewsletter } from './actions'

import {
	Button
} from 'react-bootstrap'



const form = reduxForm({
	form: 'newsletterForm',
	validate
})



const renderField = field => (
		<div>
			<input className="form-control" {...field.input}/>
			{field.touched && field.error && <div className="error">{field.error}</div>}
		</div>
)



function validate(formProps) {
	const errors = {};

	if (!formProps.email) {
		errors.email = 'Please enter an email';
	}

	return errors;
}



class Newsletter extends Component {


	handleFormSubmit(formProps) {
		this.props.registerUser(formProps);
	}


	renderAlert() {
		if(this.props.errorMessage) {
			return (
				<div>
					<span><strong>Error!</strong> {this.props.errorMessage}</span>
				</div>
			);
		}
	}


	render() {
		const { handleSubmit } = this.props;

		return (

				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

				{this.renderAlert()}

					<div className="row">
						<div className="col-md-8">
							<label>Email</label>
							<Field name="email" className="form-control" component={renderField} type="text" />
						</div>
						<div className="col-md-4">
							<button type="submit" className="btn btn-primary">Sign Up</button>
						</div>
					</div>
				</form>

		);
	}
}

function mapStateToProps(state) {
	return {
		errorMessage: state.auth.error,
		message: state.auth.message
	};
}

export default connect(
	mapStateToProps, {
		registerNewsletter
	})(form(Newsletter));
