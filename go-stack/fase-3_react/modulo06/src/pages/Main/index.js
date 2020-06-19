import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Container } from './styles';

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black,
    margin: 10,
  },
});

const Main = () => {
  return (
    <Container>
      <Text style={styles.sectionTitle}>Hello</Text>
      <Text style={styles.sectionTitle}>Alex</Text>
    </Container>
  );
};

export default Main;
