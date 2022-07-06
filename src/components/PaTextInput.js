import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
/* Taildwind css */
import { colors } from 'react-native-tailwindcss';

const PaTextInput = ({ label, placeholder, value, setValue }) => {
  return (
    <View>
      {!!value && <Text style={styles.textInputLabel}>{label}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value ? value : ''}
        onChangeText={(newValue) => setValue(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputLabel: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 62,
    color: colors.green700,
  },
  textInput: {
    marginVertical: 12,
    height: 50,
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.green300,
    padding: 5,
  },
});

export default PaTextInput;
