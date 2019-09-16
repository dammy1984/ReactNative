import React from 'react';
import { TouchableOpacity,TextInput,Alert,StyleSheet, Text, View,Button } from 'react-native';
import customerService from '../services/CustomerService';
import SimpleMenu from './SimpleMenu';
export default class CustomerApp extends React.Component {
  static navigationOptions = {
    headerTitle: 'Add Customer',
    headerRight: (
      <View>
      </View>
    ),
  };
  constructor(props) {
    super(props);
    this.state = {

    };
    this.id = this.props.navigation.getParam('id', 'NO-ID');
  }
  addUpdateCustomer(){
      let customer = {};
      customer.name = this.state.name;
      customer.email = this.state.email;
      if(this.id == 'NO-ID'){//means add
        customerService.addCustomer(customer);
      }else{
        customer.id = this.id;
        customerService.updateCustomer(customer);
      }
      this.props.navigation.navigate('CustomerList');
  }
  onChangeText(value){
    this.setState({value:value});
  }
  getButtonLabel = () =>{
    if(this.id == 'NO-ID'){
      return 'Add Customer';
    }else{
      return 'Update Customer';
    }
  }
  componentDidMount(){
    if(this.id != 'NO-ID'){
      let customer = customerService.getCustomerById(this.id);
      this.setState({
        name:customer.name,
        email:customer.email,
        id:customer.id
      })
    }
  }
  render(){
  return (
      <View style={{height:300, flexDirection: 'column',alignItems:'center',justifyContent: 'center'}}>
        <SimpleMenu navigation={this.props.navigation}/>
        <View style={{flex: 1, width:'50%' }} >
        <TextInput 
        placeholder="name"
        style={{ height: 40,
          borderColor: 'gray', 
          borderWidth: 1 }}
          onChangeText={(text) => {this.setState({name:text})}}
          value={this.state.name}
    />
    </View>
    <View style={{flex: 1, width:'50%'}}>
    <TextInput 
        placeholder="email"
        style={{ height: 40, 
          borderColor: 'gray', 
          borderWidth: 1 }}
          onChangeText={(text) => {this.setState({email:text})}}
          value={this.state.email}
    />
     </View>
      <View style={{flex: 1, width:'50%'}}>
      <TouchableOpacity style={{backgroundColor: "#00b5ec"}}
      onPress={()=>{
        this.addUpdateCustomer();
      }}>
      <Text>
      {this.getButtonLabel()}
      </Text>
          </TouchableOpacity>
       </View>
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
