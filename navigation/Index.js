import { createDrawerNavigator} from '@react-navigation/drawer';
import {createAppContainer} from 'react-navigation';
import SignupRoutes from '../routes/SignupRoutes';
import LoginRoutes from '../routes/LoginRoutes';

const screen = createDrawerNavigator({
    Login: {
        screen : LoginRoutes
    },
    Signup:{
        screen: SignupRoutes
    },
})

export default createAppContainer(screen);