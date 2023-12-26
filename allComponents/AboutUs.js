import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

const AboutUs = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>About Us</Text>
        <Text style={styles.headerDescription}>
          Some text about who we are and what we do. Resize the browser window to see that this page is responsive by the way.
        </Text>
      </View>

      <Text style={styles.teamHeader}>Our Team</Text>

      <ScrollView horizontal={true}>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Image
              source={{ uri: 'https://example.com/images/jane.jpg' }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Jane Doe</Text>
              <Text style={styles.role}>CEO & Founder</Text>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>jane@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </Card>

          {/* Cards for other team members */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1890ff',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerDescription: {
    color: 'white',
    textAlign: 'center',
  },
  teamHeader: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    width: 200,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  role: {
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default AboutUs;
