import React from 'react';
import { StatusBar, SafeAreaView, ScrollView,TextInput,Alert,StyleSheet, Text, View,Button } from 'react-native';

export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], name:'', email: '', mobile: ''};
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  onChangeName(value){
    this.setState({name:value});
  }

  onChangeEmail(value){
    this.setState({email:value});
  }

  onChangeMobile(value){
    this.setState({mobile:value});
  }

  handleCreate() {
    console.log("Do Create")
    if (!this.state.name.length && !this.state.email.length && !this.state.mobile.length) {
      return;
    }

    const newItem = {
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
        id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      name: '',
      email: '',
      mobile: ''
    }));
  }

  handleUpdate() {
    console.log("Total Records" + this.state.items.length)
    console.log("Do Update")
 }

  render(){
  return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 20, marginVertical: 20 }} onChangeText={text => this.onChangeName(text)} value={this.state.name} placeholder ='Name'/>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 20, marginVertical: 20  }} onChangeText={text => this.onChangeEmail(text)} value={this.state.email}  placeholder ='Email'/>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 20, marginVertical: 20  }} onChangeText={text => this.onChangeMobile(text)} value={this.state.mobile}  placeholder ='Mobile'/>

                <Button title="Create Customer" color="#f194ff" backgroundColor="green" onPress={this.handleCreate}> </Button>
                <Button title="Update Customer" color="#f194ff" backgroundColor="green" onPress={this.handleUpdate}> </Button>

            </ScrollView>
        </SafeAreaView>
      </View>
  );
}
}
