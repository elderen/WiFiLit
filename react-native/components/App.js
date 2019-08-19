window.navigator.userAgent = 'react-native';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import LobbyChat from './lobbyChat.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.username,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./blackBG.jpg')}
          style={{ width: '100%', height: '100%' }}
          resizeMode='repeat'
        >
          <LobbyChat name={this.state.name} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  words: {
    fontSize: 30,
    color: 'orange',
  }
});
