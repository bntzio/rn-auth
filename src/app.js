import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import firebaseKeys from './firebase/keys';
import { Header } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseKeys);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
