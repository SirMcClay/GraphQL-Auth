import React, { Component } from 'react';

class AuthForm extends Component {
	constructor(props) {
		super(props);

		this.state = { email: '', password: '' };
	}

	render() {
		return (
			<div className="row">
				<form className="col s4">
					<div className="input-field">
						<label>Email</label>
						<input />
					</div>
					<div className="input-field">
						<label>Password</label>
						<input />
					</div>
				</form>
			</div>
		);
	}
}

export default AuthForm;
