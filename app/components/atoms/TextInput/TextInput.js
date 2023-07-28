import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const TextInputComponent = () => {
  return (
    <View>
      <Text style={styles.label}>Email Address</Text>
      <TextInput style={styles.input} placeholder="Type your email address" />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#020202',
    padding: 10,
  },
});
