import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import Router from './Router';


class App extends Component {
    componentDidMount(): void {
      const config = {
            apiKey: 'AIzaSyDfGo5NivLH356e8Zbj6nl1OqW5KobH1tk',
            authDomain: 'manager-ba200.firebaseapp.com',
            databaseURL: 'https://manager-ba200.firebaseio.com',
            projectId: 'manager-ba200',
            storageBucket: '',
            messagingSenderId: '518999362544',
            appId: '1:518999362544:web:0d091f5443fc7e32'
        };
      firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider
                store={createStore(reducers,
                    {},
                    applyMiddleware(ReduxThunk))}
            >
                    <Router />
            </Provider>
        );
    }
}

export default App;
