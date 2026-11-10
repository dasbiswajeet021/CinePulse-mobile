import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/Actions';

const inputFields = [
  { Username: 'Enter username' },
  { Password: 'Enter password' },
];

const Login = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {inputFields.map((input, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text>{Object.keys(input)[0]}</Text>
          <TextInput
            placeholder={Object.values(input)[0]}
            style={styles.inputStyles}
            key={index}
          />
        </View>
      ))}
      <TouchableOpacity style={styles.loginButtonStyle} onPress={() => dispatch(login())}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  inputContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: 'grey',
  },
  inputStyles: {
    height: 28,
    borderWidth: 1,
    marginTop: 20,
  },
  loginButtonStyle: {
    width: '80%',
    height: '30',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
  },
});
