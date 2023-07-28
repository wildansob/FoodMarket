import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const TextInputComponent = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
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
