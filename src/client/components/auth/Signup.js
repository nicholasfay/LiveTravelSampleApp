import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
	//saves a call to bind by using arrow function
	onSubmit = (formProps) => {
		this.props.signup(formProps, () => {
			console.log('sign up')
		});
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field
						name="email"
						type="text"
						component="input"
						autoComplete="none"
					></Field>
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field
						name="password"
						type="password"
						component="input"
						autoComplete="none"
					></Field>
				</fieldset>
				<div>{this.props.errorMessage}</div>
				<button>Sign up!</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

//Can pass as many higher order components/data composers through the compose function onto your current component
export default compose(
	connect(mapStateToProps, actions),
	reduxForm({ form: 'signup' })
)(Signup);