import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import ContactUs from './ContactUs';
import Login from './Login';
import AboutUs from './AboutUs';
import MyDashboard from './MyDashboard';
import RealTimeStockData from './RealTimeStockData';
import StockDataChart from './StockDataChart';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Market Pulse" component={RealTimeStockData} />
      <Drawer.Screen name="My Dashboard" component={MyDashboard} />
      <Drawer.Screen name="All Stocks Chrt" component={StockDataChart} />
 
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
