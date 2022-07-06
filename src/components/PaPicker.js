import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

/* Taildwind css */
import { colors } from 'react-native-tailwindcss';

const PaPicker = ({ label, placeholder, options = [], value, setValue }) => {
  return (
    <View style={styles.viewPicker}>
      {!!value && <Text style={styles.pickerLabel}>{label}</Text>}
      <Picker
        style={styles.picker}
        selectedValue={value ? value : ''}
        value={value ? value : ''}
        onValueChange={(itemValue) => setValue(itemValue)}
      >
        <Picker.Item label={placeholder} value="" />
        {options.map((option, optionIndex) => (
          <Picker.Item
            key={`picker_option_${optionIndex}_${option.value}`}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPicker: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.green300,
    marginVertical: 12,
  },
  pickerLabel: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 50,
    color: colors.green700,
  },
  picker: {
    width: 300,
    paddingBottom: 30,
  },
});

export default PaPicker;
