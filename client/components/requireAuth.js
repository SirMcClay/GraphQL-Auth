import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import currentUserQuery from '../queries/CurrentUser';

class RequireAuth extends Component {
	componentDidMount() {
		if (!this.props.data.loading && !this.props.data.user) {
			hashHistory.push('/login');
		}
	}
}

export default graphql(currentUserQuery)(RequireAuth);
