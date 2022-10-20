import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {

  return (
    <View>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  }
});

export default ProductItem