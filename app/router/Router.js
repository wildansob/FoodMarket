import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen/SplashScreen';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import SignUpAddress from '../pages/SignUpAddress/SignUpAddress';
import SuccessSIgnUp from '../pages/SuccessSignUp/SuccessSIgnUp';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSIgnUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
