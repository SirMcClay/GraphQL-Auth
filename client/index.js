import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';

// THIS FIX IS NOT NEEDED ANYMORE - Because Apollo 2.0
const networkInterface = createNetworkInterface({
	uri: '/graphql',
	opts: {
		credentials: 'same-origin',
	},
});

const client = new ApolloClient({
	networkInterface, // FIX NOT NEEDED ANYMORE
	dataIdFromObject: (o) => o.id,
});

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<Route path="login" component={LoginForm} />
				</Route>
			</Router>
		</ApolloProvider>
	);
};

ReactDOM.render(<Root />, document.querySelector('#root'));
