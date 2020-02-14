import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import BottomTabs from './screens/BottomTabs'
// import Login_Activity from './screens/Login_Activity'

export default class App extends React.Component {
  render() {
    return (
      <BottomTabs/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
