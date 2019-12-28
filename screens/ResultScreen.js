import React from 'react';
import {View,Text,StyleSheet,Image,FlatList,Platform, Button} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton'
import ProductItem from '../Components/ProductItem';



class ResultScreen extends React.Component{


    constructor(props){
        super(props);
        this.state={
            pictures:[],
            text:this.props.navigation.getParam('searched'),
            page:1,
            grid:2,
            key:1
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: 'Results For '+navigation.getParam('searched'),
            headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Cart" 
            iconName={Platform.OS === 'android' ? 'md-grid' : 'ios-grid'}
            onPress={(navigation.getParam('increaseCount'))}/>
            
            </HeaderButtons>)
         
        };
      };
    componentDidMount(){
        this.makeRemoteRequest()
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
 
    handleLoadMore = () => {
        this.setState({
            page:this.state.page+1,
        },
        ()=>{
            this.makeRemoteRequest();
        }
        )
    }
    makeRemoteRequest(){
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b5acf054ee662671ac5ff085e5087792&format=json&nojsoncallback=1&text='+this.state.text+'&page='+this.state.page+'&extras=url_o')
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
            this.setState({pictures:[...this.state.pictures,...picArray]})
        }.bind(this))
    }


    _increaseCount = () => {
        if(this.state.grid<=3)
        {
            this.setState({ grid: this.state.grid + 1 ,key:this.state.key+1});
        }else{
            this.setState({ grid: 2 ,key:1});
        }
        
      };
    render(){
    //     const recived = this.props.navigation.getParam('subreddit')
        
    console.log(this.state.page)
        return(
            <FlatList data={this.state.pictures}
            key={this.state.key} 
            numColumns={this.state.grid} keyExtractor={item => item} 
            renderItem={itemData => <ProductItem grid={this.state.grid} 
            image={itemData.item}
            />}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={40} 
        /> 
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

