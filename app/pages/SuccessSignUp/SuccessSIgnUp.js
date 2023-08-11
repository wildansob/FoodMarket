import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessSignUp} from '../../assets';
import Button from '../../components/atoms/Button/Button';
import Gap from '../../components/atoms/Gap/Gap';

const SuccessSIgnUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed </Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>Some foods as a self-reward </Text>
      <Gap height={30} />

      <View style={styles.button}>
        <Button text={'Find Foods'}  />
      </View>
    </View>
  );
};

export default SuccessSIgnUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  button: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
