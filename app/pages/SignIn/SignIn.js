import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Button from '../../components/atoms/Button/Button';
import TextInputComponent from '../../components/atoms/TextInput/TextInput';
import Gap from '../../components/atoms/Gap/Gap';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subTitle={'Find your best meal ever'} />
      <View style={styles.container}>
        <TextInputComponent label={'Email Address'} placeholder={'Type your email address'} />
        <Gap height={16} />
        <TextInputComponent label={'Password'} placeholder={'Type your password here'}/>
        <Gap height={24} />
        <Button text={'Sign In'}/>
        <Gap height={12}/>
        <Button text={'Create New Account'} color='#8D92A3' textColor='white' onPress={() => navigation.navigate('SignUp')}/>
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
