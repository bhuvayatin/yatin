import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'firebase';

// import the custome compenent
import Dashboard from './navigation/dashbaord';
import Rootstack from './componant/Rootstack';
import apiKeys from './config/Config';
import MyDrawer from './componant/MainDrawer';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      isLoading:true,
      isAuthReady:false,
      isAuth:false,
    }
    // load firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(apiKeys.firebaseConfig)
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({isAuthReady:true})
        this.setState({isAuth:!!user})
      })
    }
  }
  render(){
    return (
     <NavigationContainer>
       {
       (this.state.isAuth) ? 
      <MyDrawer/>
        :
         <Rootstack/>
         }
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
