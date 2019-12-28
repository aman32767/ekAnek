import React from 'react';
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native';

const ProductItem = (props) => {
    var {height, width} = Dimensions.get('window');
    let widthImage = '48%';
    let heightImage = width/2;
    let columns=props.grid;
    if(columns===3)
    {
         widthImage = '31%';
         heightImage = width/3;   
    }
    if(columns===4)
    {
        widthImage = '23%'; 
        heightImage = width/4;   
    }
    return (
        <View style={{
            height: heightImage,
            width:widthImage,
            margin:3
            }}>
           <Image style={styles.image} source={{uri:props.image}} />   
        </View>
    )
}

const styles = StyleSheet.create({
    // product:{
    //     elevation:5,
    //     borderRadius:10,
    //     backgroundColor:'white',
    //     height: props.a===1?50:400,
    //     width:40,
    //     margin:20
    // },
    image:{
        width:'100%',
        height:'100%'
    }
})

export default ProductItem
