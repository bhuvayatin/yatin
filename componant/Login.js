import React, {useState} from 'react';
import { View, TextInput,Text,TouchableOpacity,Dimensions,StyleSheet,Platform, StatusBar,Button, Alert } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const vw = Dimensions.get('window').width/100;
const vh =Dimensions.get ('window').height/100;
const image = { uri: '../img/bg.jpeg' };

const SignInScreen = ({navigation})=> {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const loginWithEmail =() =>{
      const fire =  firebase.auth().signInWithEmailAndPassword(email, password);
      Alert.alert(fire)
    }
   

    

    return(
       

        
        <View style={styles.maincon}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
             
             <View style={styles.header}>
                 <Text style={styles.text_header}>Welcome!</Text>
                 </View>
        
            <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}>
           
                <Text style={styles.text_footer}> email</Text>
                <View style={styles.action}>
                   
                   <TextInput
                   placeholder="Your email"
                   style={styles.textinput}
                   autoCapitalize="none"
                   onChangeText={(emailValue)=>{
                    setEmail(emailValue)
                   }}value={email}
                   />
                
                  
                
                </View>    
                <Text style={[styles.text_footer,{marginTop:20}]}> Password</Text>
                <View style={styles.action}>
                 
                   <TextInput
                   placeholder="Your Password"
               
                   style={styles.textinput}
                   autoCapitalize="none"
                   onChangeText={(passwordValue)=>{
                    setPassword(passwordValue)
                   }}value={password}
                   />
                   
                </View>    
                     <TouchableOpacity>
                         <Text style={{color:'#009387',marginTop:15}}>
                             Forgot Password
                         </Text>
                     </TouchableOpacity>

                     <View style={styles.button}>
                     <TouchableOpacity
                            onPress= {loginWithEmail}
                            style={[styles.signin,{
                                borderColor:"#009387",
                                borderWidth:1,
                                marginTop:15
                             }]}
                        >
                             <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signin}
                            
                            >
                            <Text style={[styles.textsign,{
                                    color:"#fff"
                                }]}>Sign In</Text>
                                </LinearGradient>
                        </TouchableOpacity>
                       
                        <TouchableOpacity
                            onPress= {()=>navigation.navigate('SignUp')}
                            style={[styles.signin,{
                                borderColor:"#009387",
                                borderWidth:1,
                                marginTop:15
                             }]}
                        >
                            <Text style={[styles.textsign,
                           { color:"#009387",}
                            ]} >
                                
                                Sign Up
                                
                                </Text>
                        </TouchableOpacity>

                     </View>

            </Animatable.View>
                   
            
        </View>
    );
}


export default SignInScreen;



const styles = StyleSheet.create({
    maincon:{
        flex:1,
        backgroundColor:"#009387"
       
    }, header:{
        flex:1,
        justifyContent:'flex-end',
       paddingHorizontal:20,
       paddingBottom:50,
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    text_header:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:30
    },
    text_footer:{
        color:"#05375a",
        fontSize:18
    },
    action:{
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:5,
    },
    textinput:{
        flex:1,
        marginTop:Platform.OS== 'ios' ? 0 : -12,
        paddingLeft:10,
        color:"#05375a",
    },
    button:{
        alignItems:"center",
        marginTop:50
    },
    signin:{
        width:"100%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textsign:{
        fontSize:18,
        fontWeight:"bold",
    }
})