import React, { useState } from 'react';
import { ScrollView, Text, TouchableHighlight } from 'react-native';
import PaTextInput from '../components/PaTextInput';
import { styles, customStyles } from '../styles/authStyles';

/* Taildwind css */
import { color } from 'react-native-tailwindcss';

const Login = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
      <Text style={styles.textTitle}>Welcome</Text>

      <PaTextInput
        label="User"
        placeholder="Type user"
        value={user}
        setValue={setUser}
      />
      <PaTextInput
        label="Password"
        placeholder="Type password"
        value={password}
        setValue={setPassword}
      />

      <TouchableHighlight
        style={customStyles.touchableHighlight}
        // onPress={onPress}
        underlayColor={color.green400}
      >
        <Text style={customStyles.textTouchable}>Log In</Text>
      </TouchableHighlight>

      <Text
        style={styles.textExistAccount}
        onPress={() => navigation.navigate('SignUp')}
      >
        I don't have an account
      </Text>
    </ScrollView>
  );
};

export default Login;
