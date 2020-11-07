import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
             confirmpassword:'',

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Create an account</Text>
                <TextInput style={styles.email} placeholder="type email"
                 onChangeText= {(email)=>{
                    this.setState({email:email})
                    }
                } value = {this.state.email} />
                 <TextInput  style={styles.password} placeholder="type Password"
                 onChangeText= {(password)=>{
                    this.setState({password:password})
                    }
                } value = {this.state.password} />
                 <TextInput  style={styles.password} placeholder="confirm Password"
                 onChangeText= {(confirmpassword)=>{
                    this.setState({confirmpassword:confirmpassword})
                    }
                } value = {this.state.confirmpassword} />
                <Button title="Sign Up" style={styles.button}/>
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
    title:{
        textAlign:"center",
        fontSize:25,
        margin:15
    },
    email:{
        borderWidth:1,
        padding: 10,
        margin:5,
        width:200
    },
    password:{
        borderWidth:1,
        padding: 10,
        margin:5,
        width:200,
    },
    button:{
        marginTop:15,
        width:100,

    },

  });
  