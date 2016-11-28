import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import firebaseKeys from './firebase/keys';
import { Header } from './components/common/';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseKeys);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Auth app</Text>
      </View>
    );
  }
}

export default App;
