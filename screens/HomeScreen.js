// import React from 'react';
// import {View,Text,StyleSheet,Button} from 'react-native';

// const HomeScreen = (props)=>{
//     return(
//         <View style={styles.screen}>
//             <Text>Home Screen</Text>
//             <Button title="Press me" onPress={
//                 ()=>{props.navigation.navigate({routeName:'Result'})}
//             }/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     screen:{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center'
//     }
// })

// export default HomeScreen;
import React from 'react';
import {KeyboardAvoidingView, Image, StyleSheet, Alert} from 'react-native';
import { Input, Button} from 'react-native-elements';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    static navigationOptions = {
        header : null
    };

    searchImage(e){
        if(this.state.text.length){
            this.props.navigation.navigate('Result', {
                subreddit: this.state.text,
            });
        }else{
            Alert.alert(
                'Invalid Input',
                'Please Enter Something',
                [
                    {text: 'OK'}
                ]
            )
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.view}
                behavior="padding"
            >

                <Image
                    source={require('../res/doogle.png')}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: 200,
                    }}
                />

                <Input
                    inputContainerStyle={styles.search}
                    containerStyle={styles.container}
                    inputStyle={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    placeholder='Search Image '
                />

                        
                <Button
                    title='Search'
                    buttonStyle={styles.button}
                    onPress={this.searchImage.bind(this)}
                />

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
   view:{
       flex:1,
       alignItems:'center',
       justifyContent:'center'
   },
   search:{
    height:50
   },
   container:{
    paddingHorizontal:'10%',
    paddingTop:10
   },
   input:{},
   button:{
    alignItems:'center',
    paddingHorizontal:20,
    marginVertical:10
   } 
});


export default Search;