import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ theme }) => {
  const keyFeatures = [
    'Explore real-time stock data',
    'Create and customize your stock portfolio',
    'Interactive charts for in-depth analysis',
    'Personalized dashboard with real-time updates',
  ];

  const styles = {
    light: {
      textColor: '#000000',
      headerColor: '#1890ff',
      cardColor: '#f0f0f0',
      cardHoverColor: '#e0e0e0',
    },
    // Add more themes as needed
  };

  const selectedStyles = styles[theme] || styles.light;

  return (
    <ScrollView contentContainerStyle={customStyles.container}>
      <TouchableOpacity
        style={{ ...customStyles.card, backgroundColor: selectedStyles.cardHoverColor }}
        activeOpacity={0.8}
      >
        <Text style={{ ...customStyles.cardText, color: selectedStyles.textColor }}>
          Welcome to our cutting-edge Stock Market App, where financial empowerment meets technological innovation.
          Stay ahead of the market curve with real-time updates, interactive charts, and personalized insights.
          Dive into a world of seamless trading, robust portfolio management, and a user-friendly interface designed to elevate your investing experience.
        </Text>
      </TouchableOpacity>

      <View style={customStyles.cardContainer}>
        <TouchableOpacity style={{ ...customStyles.card, backgroundColor: selectedStyles.cardColor }}>
          <Text style={{ ...customStyles.cardText, color: selectedStyles.textColor }}>
            Discover the power of real-time stock market data at your fingertips.
          </Text>
          <TouchableOpacity
            style={{ ...customStyles.exploreButton, backgroundColor: selectedStyles.cardHoverColor }}
            activeOpacity={0.8}
          >
            <Text style={{ ...customStyles.exploreButtonText, color: selectedStyles.textColor }}>Explore Now</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Additional Solid Cards */}
        <View style={{ ...customStyles.card, backgroundColor: selectedStyles.cardColor }}>
          <Text style={{ ...customStyles.cardText, color: selectedStyles.textColor }}>
            Dive into interactive charts for a comprehensive analysis of market trends and stock performance.
          </Text>
          <TouchableOpacity
            style={{ ...customStyles.exploreButton, backgroundColor: selectedStyles.cardHoverColor }}
            activeOpacity={0.8}
          >
            <Text style={{ ...customStyles.exploreButtonText, color: selectedStyles.textColor }}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={{ ...customStyles.card, backgroundColor: selectedStyles.cardColor }}>
          <Text style={{ ...customStyles.cardText, color: selectedStyles.textColor }}>
            Manage your portfolio with ease and precision. Our user-friendly interface puts you in control.
          </Text>
          <TouchableOpacity
            style={{ ...customStyles.exploreButton, backgroundColor: selectedStyles.cardHoverColor }}
            activeOpacity={0.8}
          >
            <Text style={{ ...customStyles.exploreButtonText, color: selectedStyles.textColor }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, paddingTop: 20, alignItems: 'center' }}>
        <Text style={{ color: selectedStyles.textColor, fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Key Features:</Text>
        <View style={{ marginTop: 10, borderWidth: 1, borderColor: selectedStyles.headerColor, borderRadius: 5 }}>
          {keyFeatures.map((feature, index) => (
            <View key={index} style={{ flexDirection: 'row', marginBottom: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
              <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const customStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  exploreButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
