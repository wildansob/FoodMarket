import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import TextInputComponent from '../../components/atoms/TextInput/TextInput';
import Gap from '../../components/atoms/Gap/Gap';
import Button from '../../components/atoms/Button/Button';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack()}
        title={'Sign Up'}
        subTitle={'Register and eat'}
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.wrapper}>
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TextInputComponent
          label={'Full Name'}
          placeholder={'Type your eFull Name'}
        />
        <Gap height={16} />
        <TextInputComponent
          label={'Email Address'}
          placeholder={'Type your Email Address'}
        />
        <Gap height={24} />
        <TextInputComponent
          label={'Password'}
          placeholder={'Type your Password'}
        />
        <Gap height={24} />
        <Button
          text={'Continue'}
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
    </View>
  );
};

export default SignUp;

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
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
