import React from 'react';
import { View, Text, StyleSheet, Button,Alert } from 'react-native';
import * as firebase from 'firebase';

export default class Dashboard extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>You Are Logged In...</Text>
                <Button title="logout" onPress={()=>{
                    Alert.alert('Logout','Do you Want to Logout',[
                        {
                            text:'Yes',
                            onPress: ()=>{
                                firebase.auth().signOut()
                            }
                        },
                        {
                            text:'No',
                        }
                    ])
                }} />
            </View>
        )
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
  