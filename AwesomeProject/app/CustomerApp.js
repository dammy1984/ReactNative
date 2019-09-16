import React from 'react';
import { TextInput,Alert,StyleSheet, Text, View,Button } from 'react-native';

export default class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:' Happiest Minds'};
  }
  onChangeText(value){
    this.setState({value:value});
  }
  render(){
  return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2}} >
        <Text> This is main app</Text>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.onChangeText(text)}
      value={this.state.value}
    />
        <Button title="Press me"
          color="#f194ff"
          backgroundColor="green"
          onPress={() => Alert.alert('Button with adjusted color pressed')}>
          </Button>
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
