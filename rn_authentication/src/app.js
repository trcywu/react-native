import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyCEJEcFAEwCartMFIeRl7yuQ541NYP18J4",
    authDomain: "react-authentication-f6e5a.firebaseapp.com",
    databaseURL: "https://react-authentication-f6e5a.firebaseio.com",
    storageBucket: "react-authentication-f6e5a.appspot.com",
    messagingSenderId: "838095020018"
    });
  }
  render() {
    return (
      <View>
      <Header headerText='Authentication'/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
