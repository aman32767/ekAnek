import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const ProductItem = (props) => {
    return (
        
        <View style={styles.product}>
           
            <Image style={styles.image} source={{uri:props.image}} />
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    product:{
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        height:300,
        margin:20
    },
    imageContainer:{
        height:'60%',
        width:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    }
})

export default ProductItem
