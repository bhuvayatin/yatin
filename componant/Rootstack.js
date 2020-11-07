import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import Login from './Login';
import SignUp from './SignUp';


const RootStack =createStackNavigator();
const RootStackScreen =( {navigator}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="SignUp" component={SignUp}/>
        
    </RootStack.Navigator>

)

export default RootStackScreen;