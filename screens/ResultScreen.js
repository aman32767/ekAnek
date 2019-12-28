import React from 'react';
import {View,Text,StyleSheet,Image,FlatList} from 'react-native';
import ProductItem from '../Components/ProductItem'

class ResultScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            pictures:[],
            text:this.props.navigation.getParam('subreddit')
        }
    }

    componentDidMount(){
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b5acf054ee662671ac5ff085e5087792&format=json&nojsoncallback=1&text='+this.state.text+'&extras=url_o')
        .then(function(response){
            return response.json()
        })
        .then(function(j){
            let picArray = j.photos.photo.map(pic => {
            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg'
            return (
              srcPath
            )
            })
            this.setState({pictures:picArray})
        }.bind(this))
    }
    render(){
    //     const recived = this.props.navigation.getParam('subreddit')
    
        return(
            <FlatList data={this.state.pictures} keyExtractor={item => item.id} 
        renderItem={itemData => <ProductItem image={itemData.item}
        />} /> 
        // <FlatList data={this.state.pictures} keyExtractor={item => item.id} 
        // renderItem={itemData => <Text>{itemData.item}</Text>} /> 
        )
    }
}
// const ResultScreen = (props)=>{
//     const recived = props.navigation.getParam('subreddit')
//     console.log(recived)
//     return(
//         <View style={styles.screen}>
//             <Text>{recived}</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default ResultScreen