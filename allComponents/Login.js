import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Image, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('123');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username && password) {
      login();
      navigation.navigate('Stock Market Pulse');
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000', // Maroon color
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fff', // White color for input border
    padding: 10,
    color: '#fff', // White color for input text
    width: '100%',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#fff', // White color for button background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#800000', // Maroon color for button text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
