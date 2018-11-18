import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
	//saves a call to bind by using arrow function
	onSubmit = (formProps) => {
		this.props.signin(formProps, () => {
			console.log('signed in');
		});
	};

	render() {
		const { handleSubmit, errorMessage } = this.props;

		if (errorMessage) {
			alert(errorMessage);
		}

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<Field
						className="user-auth__input"
						name="email"
						type="text"
						component="input"
						autoComplete="none"
						placeholder="Email"
					></Field>
				</fieldset>
				<fieldset>
					<Field
						className="user-auth__input"
						name="password"
						type="password"
						component="input"
						autoComplete="none"
						placeholder="Password"
					></Field>
				</fieldset>
				<button className="btn-home">Sign in!</button>
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
	reduxForm({ form: 'signin' })
)(Signin);