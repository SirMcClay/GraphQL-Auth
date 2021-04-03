import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';

class LoginForm extends Component {
	render() {
		return (
			<div>
				<h3>Login</h3>
				<AuthForm />
			</div>
		);
	}
}

export default LoginForm;
