import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ChacheImage from '../ChacheImage';

const ProductItem = (props) => {
  var { width } = Dimensions.get('window');
  let widthImage = '48%';
  let heightImage = width / 2;
  let columns = props.grid;
  if (columns === 3) {
    widthImage = '31%';
    heightImage = width / 3;
  }
  if (columns === 4) {
    widthImage = '23%';
    heightImage = width / 4;
  }
  return (
    <View
      style={{
        height: heightImage,
        width: widthImage,
        margin: 3,
      }}
    >
      <ChacheImage style={styles.image} uri={props.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ProductItem;
