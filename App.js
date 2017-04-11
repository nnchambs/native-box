import React from 'react';
import IdeaForm from './IdeaForm.js';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ideas: [{title: 'yay', idea: 'noooo'}]
    }
  }

  postIdea() {
    async () => {
      try {
        await AsyncStorage.setItem('IDEAS', JSON.stringify(this.state.ideas) )
      } catch(error) {

      }
    }
  }

  addIdeaToIdeasArray(newIdea, that) {
    let ideas = that.state.ideas
    ideas = ideas.push(newIdea)
    that.setState({ideas: ideas})
  }

  handleSubmit(newIdea) {
    let that = this
    this.addIdeaToIdeasArray(newIdea, that)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Idea Box</Text>
        <IdeaForm handleSubmit={this.handleSubmit.bind(this)}
        />
        <Text>{this.state.ideas[0].title}</Text>
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
