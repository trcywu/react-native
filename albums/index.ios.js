// index.ios.js - place code in here for IOS!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => (
  //expand the component to the entire view
  <View style={{ flex: 1 }}>
    <Header headerText={'Journal'}/>
    <AlbumList />
  </View>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
