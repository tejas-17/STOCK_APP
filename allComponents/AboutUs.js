import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>This is a mobile app for stock monitoring.</Text>
      </View>

      <Text style={styles.teamHeader}>Our Team</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Team Member 1</Text>
              <Text style={styles.role}>Role 1</Text>
              <Text>Description of the role and responsibilities.</Text>
              <Text>team.member1@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Team Member 2</Text>
              <Text style={styles.role}>Role 2</Text>
              <Text>Description of the role and responsibilities.</Text>
              <Text>team.member2@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Team Member 3</Text>
              <Text style={styles.role}>Role 3</Text>
              <Text>Description of the role and responsibilities.</Text>
              <Text>team.member3@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1890ff',
    padding: 20,
    alignItems: 'center',
  },
  teamHeader: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexDirection: 'column', // Display items vertically
    alignItems: 'center', // Center items horizontally
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '80%', // Adjust the width as per your preference
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    textAlign: 'center',
    fontWeight: '500'
  },
  button: {
    marginTop: 10,
  },
});

export default AboutUs;
