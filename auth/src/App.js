import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import {Button, Header, Spinner, Card, CardSection} from './components/common';


class App extends Component {
    state = { loggedIn: null };

    componentDidMount(): void {
        firebase.initializeApp({
            apiKey: 'AIzaSyBbzGZFidIU-Ze-USFe2Z0PpRuD7H1jYfs',
            authDomain: 'authentication-e8234.firebaseapp.com',
            databaseURL: 'https://authentication-e8234.firebaseio.com',
            projectId: 'authentication-e8234',
            storageBucket: '',
            messagingSenderId: '162449101699',
            appId: '1:162449101699:web:11dc46c9f36e4984'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button
                            onPress={() => firebase.auth().signOut()}
                            >Log out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size={'large'} />;
        }
    }

    render() {
    return (
        <View>
            <Header headerText={'Authentication'} />
            {this.renderContent()}
        </View>
    );
  }
}

export default App;
