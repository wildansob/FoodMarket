import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './pages/SignIn/SignIn';
import Header from './components/molecules/Header/Header';

const App = () => {
  return (
    <NavigationContainer>
      <SignIn />
      {/* <SplashScreen /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
