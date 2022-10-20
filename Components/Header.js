import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Header = ({ title = "E-commerce" }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Koulen'
  }
});

export default Header
