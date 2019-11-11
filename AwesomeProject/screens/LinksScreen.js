import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LinksScreen() {
  return (
      <View style={styles.container}>
        <View style={{flex: 3, flexDirection: 'column', backgroundColor: '#fff', justifyContent: 'center'}}>
          <Text style={{alignItems: 'center'}}>Hello</Text>
        </View>
      </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Numbers',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
