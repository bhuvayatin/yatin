import React , {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';

const SignUp = ({navigation})=> {
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
   
    const register = () =>{
        if (!name) {
            Alert.alert('please enter name');
        }
        if (!email) {
            Alert.alert('please enter email');   
        }
        if (!password) {
            Alert.alert('please enter password');
        }
        else{
            // Alert.alert('Ready to go!');
            firebase.auth().createUserWithEmailAndPassword(email, password);
         
        }
    }
       return  (
            <View style={styles.container}>
                <Text style={styles.title}>Create an account</Text>
                <TextInput style={styles.name} placeholder="type your name"
                 onChangeText= {(nameValue)=>{
                    setName(nameValue)
                    }
                } value = {name} />
                <TextInput style={styles.email} placeholder="type email"
                 onChangeText= {(emailValue)=>{
                    setEmail(emailValue)
                    }
                } value = {email} />
                 <TextInput  style={styles.password} placeholder="type Password"
                 onChangeText= {(passwordValue )=>{
                   setPassword(passwordValue)
                    }
                } value = {password} />
                
                <Button title="SignUp" style={styles.button} onPress={register}/>
                <Button title="Sign In" onPress={()=>{
                    navigation.navigate('Login')
                }} />
            </View>
        )
    }

    export default SignUp;

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
    name:{
        borderWidth:1,
        padding: 10,
        margin:5,
        width:200
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
  