import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  sectionTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black,
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hello</Text>
      <Text style={styles.sectionTitle}>Alex</Text>
    </View>
  );
}
