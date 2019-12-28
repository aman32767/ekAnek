import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const HomeScreen = (props)=>{
    return(
        <View style={styles.screen}>
            <Text>Home Screen</Text>
            <Button title="Press me" onPress={
                ()=>{props.navigation.navigate({routeName:'Result'})}
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default HomeScreen;