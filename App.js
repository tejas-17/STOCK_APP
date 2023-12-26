import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './allComponents/DrawerNavigator';
import { AuthProvider } from './allComponents/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
