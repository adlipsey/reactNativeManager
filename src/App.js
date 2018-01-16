import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import Thunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBMoiRFHwoCxQH7JXkVpSZC230w8Od3874',
			authDomain: 'manager-d8f96.firebaseapp.com',
			databaseURL: 'https://manager-d8f96.firebaseio.com',
			projectId: 'manager-d8f96',
			storageBucket: 'manager-d8f96.appspot.com',
			messagingSenderId: '275285504985'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider 
			store={createStore(reducers, { }, applyMiddleware(Thunk))}
			>
				<Router />
			</Provider>
		);
	}
}

export default App;
