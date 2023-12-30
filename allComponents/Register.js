import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
    // Clear the error message when the user starts typing again
    setErrors({
      ...errors,
      [fieldName]: '',
    });
  };

  const handleSubmit = () => {
    const formErrors = {};

    if (!formData.username.trim()) {
      formErrors.username = 'Please enter a username';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Please enter an email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Please enter a valid email';
    }

    if (!formData.password.trim()) {
      formErrors.password = 'Please enter a password';
    }

    if (!formData.confirmPassword.trim()) {
      formErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreement) {
      formErrors.agreement = 'Please accept the agreement';
    }

    if (Object.keys(formErrors).length === 0) {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Success',
        text2: 'You are registered successfully!',
      });
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreement: false,
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Register Yourself</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            value={formData.username}
            onChangeText={(text) => handleInputChange('username', text)}
            style={styles.input}
          />
          {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
          <TextInput
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            style={styles.input}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput
            placeholder="Password"
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry={true}
            style={styles.input}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <TextInput
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
            secureTextEntry={true}
            style={styles.input}
          />
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
          <TouchableOpacity
            onPress={() => handleInputChange('agreement', !formData.agreement)}
            style={styles.checkboxContainer}
          >
            <Text style={styles.checkboxText}>I have read the agreement</Text>
            <Text style={styles.checkbox}>{formData.agreement ? '✔️' : '❌'}</Text>
          </TouchableOpacity>
          {errors.agreement && <Text style={styles.errorText}>{errors.agreement}</Text>}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'maroon',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  inputContainer: {
    width: '80%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'maroon',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginRight: 10,
  },
  checkbox: {
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: 'maroon',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Register;
