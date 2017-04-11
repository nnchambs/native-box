import React from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default class IdeaForm extends React.Component {
  constructor() {
    super()
    this.state = {
        title: '',
        idea: ''
    }
  }

  handleChange() {
    this.setState()
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1, marginLeft: 150}}
          onChangeText={(text) => this.setState({ title: text })}
          ></TextInput>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginLeft: 150}}
          onChangeText={(text) => this.setState({idea: text })}
          ></TextInput>
          <Text>{this.state.title}</Text>
          <Text>{this.state.idea}</Text>
        <Button title="Submit Idea"
          color="#841584"
          onPress={() => this.props.handleSubmit(this.state)}
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
