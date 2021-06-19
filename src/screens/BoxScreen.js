import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.view1Style}></View>
      <View style={styles.view2Style}></View>
      <View style={styles.view3Style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view1Style: {
    height: 50,
    width: 50, 
    backgroundColor: 'blue'
  },
  view2Style: {
    height: 50,
    width: 50, 
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  },
  view3Style: {
    height: 50,
    width: 50, 
    backgroundColor: 'orange'
  }
});

export default BoxScreen; 