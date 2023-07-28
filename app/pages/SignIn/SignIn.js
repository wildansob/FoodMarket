import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Button from '../../components/atoms/Button/Button';
import TextInputComponent from '../../components/atoms/TextInput/TextInput';
import Gap from '../../components/atoms/Gap/Gap';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.container}>
        <TextInputComponent />
        <Gap height={16} />
        <TextInputComponent />
        <Gap height={24} />
        <Button />
        <Button />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
