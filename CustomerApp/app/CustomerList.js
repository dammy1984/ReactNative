import React, { Component } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView
  } from 'react-native';
  import { NavigationEvents } from 'react-navigation';

import { createStackNavigator } from 'react-navigation';
import Menu from './SimpleMenu';
import customerService from '../services/CustomerService';


export default class CustomerList extends Component {
    static navigationOptions = {
    headerTitle: 'Customers',
    headerRight: (
      <View>
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#000"
      />
      </View>
    ),
  };
  constructor(props) {
    console.log(">> Movies");
    super(props);
    this.state ={customers:customerService.getCustomer()};
  }
  componentDidMount(){
    console.log(">>>>> componentDidMount...");
  } 
  render() {
    return (
      <ScrollView>
      <NavigationEvents
      onWillFocus={payload =>
      {
       this.setState({customers:customerService.getCustomer()}); 
      }}
    />
      <Menu navigation={this.props.navigation}/>
      <View style={{flex: 1, flexDirection: 'row', height: 20}}>
        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text >
            Id
          </Text>
        </View>

        <View style={{flex: 1, height: 20, backgroundColor: 'pink'}}>
          <Text>
            Name
          </Text>
        </View>

        <View style={{flex: 2, height: 20, backgroundColor: 'powderblue'}}>
          <Text>
            Email
          </Text>
        </View>
        <View style={{flex: 1, height: 20, backgroundColor: 'pink'}}>
          <Text>
            Edit
          </Text>
        </View>

        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text>
            Delete
          </Text>
        </View>
      </View>

    {this.state.customers.map(item => (
      <View style={{flex: 1, flexDirection: 'row', height: 20}} key = {item.id}>
        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text>
            {item.id} 
          </Text>
        </View>

        <View style={{flex: 1, height: 20, backgroundColor: 'pink'}}>
          <Text>
            {item.name}
          </Text>
        </View>

        <View style={{flex: 2, height: 20, backgroundColor: 'powderblue'}}>
          <Text>
            {item.email}
          </Text>
        </View>
        <View style={{flex: 1, height: 20, backgroundColor: 'pink'}}>
          <TouchableOpacity onPress={()=> {
            console.log("edit");
            this.props.navigation.navigate('Add', { id: item.id })
          }}> 
          <Text>
            Edit
          </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <TouchableOpacity onPress={()=> {
            customerService.deleteCustomer(item.id);
            this.setState({customers:customerService.getCustomer()}); 
          }}> 
          <Text>
            Delete
          </Text>
          </TouchableOpacity> 
        </View>
      </View>
      ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});