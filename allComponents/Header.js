import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';

const Header = ({ navigation }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleThemeToggle = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Perform logout action and navigate to the appropriate screen
    navigation.navigate('Home'); // Navigate to the Home screen after logout
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Stock Market Pulse</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={handleThemeToggle}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        {isAuthenticated ? (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MarketPulse')}>
              <Text>Market Pulse</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Text>My Dashboard</Text>
            </TouchableOpacity>
            {/* Add other authenticated menu items */}
            <TouchableOpacity onPress={handleLogout}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
              <Text>About Us</Text>
            </TouchableOpacity>
            {/* Add other non-authenticated menu items */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Header;
