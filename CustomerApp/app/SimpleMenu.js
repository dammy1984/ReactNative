import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class SimpleMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Button
        onPress={() => this.props.navigation.navigate('Add')}
        title="Add"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Movies')}
        title="Movies"
      />
      <Button
         onPress={() => this.props.navigation.navigate('Details')}
        title="Details"
      />
      <Button
         onPress={() => this.props.navigation.navigate('CustomerList')}
        title="Customers"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Login')}
        title="Logout"
      />
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