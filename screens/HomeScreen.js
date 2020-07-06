import React from 'react';
import { KeyboardAvoidingView, Image, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  searchImage(e) {
    if (this.state.text.length) {
      this.props.navigation.navigate('Result', {
        searched: this.state.text,
      });
    } else {
      Alert.alert('Invalid Input', 'Please Enter Something', [
        { text: 'OK', onPress: () => console.log('ok pressed') },
      ]);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.view} behavior='padding'>
        <Image
          source={require('../res/doogle.png')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            height: 155,
          }}
        />

        <Input
          inputContainerStyle={styles.search}
          containerStyle={styles.container}
          inputStyle={styles.input}
          onChangeText={(text) => this.setState({ text })}
          placeholder='Search Image'
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
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    height: 50,
  },
  container: {
    paddingHorizontal: '10%',
    paddingTop: 10,
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default Search;
