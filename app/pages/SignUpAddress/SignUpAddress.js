import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import TextInputComponent from '../../components/atoms/TextInput/TextInput';
import Gap from '../../components/atoms/Gap/Gap';
import Button from '../../components/atoms/Button/Button';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack()}
        title={'Address'}
        subTitle={"Make sure it's valid "}
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInputComponent
          label={'Phone Number'}
          placeholder={'Type your phone number'}
        />
        <Gap height={16} />
        <TextInputComponent
          label={'Address'}
          placeholder={'Type your address'}
        />
        <Gap height={16} />
        <TextInputComponent
          label={'House No'}
          placeholder={'Type your Password'}
        />
        <Gap height={24} />
        <Button
          text={'Sign Up Now'}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

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
