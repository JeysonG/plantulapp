import React, { useState } from 'react';
import { ScrollView, Text, TouchableHighlight } from 'react-native';
import PaTextInput from '../components/PaTextInput';
import PaPicker from '../components/PaPicker';
import { styles, customStyles } from '../styles/authStyles';

/* Taildwind css */
import { color } from 'react-native-tailwindcss';

const Singup = ({ navigation }) => {
  /* Static data */

  const countries = [
    {
      label: 'Colombia',
      value: 'co',
    },
    {
      label: 'Mexico',
      value: 'mx',
    },
    {
      label: 'Unites States of America',
      value: 'us',
    },
  ];
  const cities = {
    co: [
      {
        label: 'Bogotá',
        value: 'bog',
      },
      {
        label: 'Medellin',
        value: 'med',
      },
      {
        label: 'Cali',
        value: 'cal',
      },
    ],
    mx: [
      {
        label: 'DC',
        value: 'dc',
      },
      {
        label: 'Chiguagua',
        value: 'chi',
      },
      {
        label: 'Yucathan',
        value: 'yuc',
      },
    ],
    us: [
      {
        label: 'New York',
        value: 'ny',
      },
      {
        label: 'Seatle',
        value: 'stl',
      },
      {
        label: 'Denver',
        value: 'dv',
      },
    ],
  };
  const roles = [
    {
      label: 'Minguero',
      value: 'minguero',
    },
    {
      label: 'Huertero',
      value: 'huertero',
    },
  ];

  /* State */

  const [fullName, setFullName] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
      <Text style={styles.textTitle}>Sign up and start to plant</Text>

      <PaTextInput
        label="Full Name"
        placeholder="Type full name"
        value={fullName}
        setValue={setFullName}
      />
      <PaPicker
        label="Country"
        placeholder="-- Select a country --"
        options={countries}
        value={country}
        setValue={setCountry}
      />
      <PaPicker
        label="City"
        placeholder="-- Select a city --"
        options={cities[country]}
        value={city}
        setValue={setCity}
      />
      <PaPicker
        label="Role"
        placeholder="-- Select a role --"
        options={roles}
        value={role}
        setValue={setRole}
      />
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
        <Text style={customStyles.textTouchable}>Sign up</Text>
      </TouchableHighlight>

      <Text
        style={styles.textExistAccount}
        onPress={() => navigation.navigate('Login')}
      >
        I already have an account
      </Text>
    </ScrollView>
  );
};

export default Singup;
