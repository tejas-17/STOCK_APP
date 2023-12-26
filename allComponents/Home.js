import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Home = () => {
  const theme = 'dark'; // Replace this with your theme logic or context usage

  const keyFeatures = [
    'View different stock categories and sectors',
    'Create your personalized dashboard',
    'Real-time data visualization with interactive charts',
    'Customizable settings for a tailored experience',
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ backgroundColor: '#1890ff', paddingVertical: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Welcome to the Stock Market Dashboard!</Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          The Stock Market Dashboard is an interactive platform designed to provide users with real-time stock market data and powerful analysis tools.
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Key Features:</Text>
        {keyFeatures.map((feature, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={{ fontSize: 16, marginRight: 5 }}>{'\u2022'}</Text>
            <Text style={{ fontSize: 16 }}>{feature}</Text>
          </View>
        ))}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Explore Now:</Text>
        <Text style={{ fontSize: 16 }}>Get started by exploring our features</Text>
      </ScrollView>
    </View>
  );
};

export default Home;
