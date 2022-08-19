import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Clipboard} from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';

type Props = {};
export default class ClipboardPage extends Component<Props> {

  copy() {
    Clipboard.setString('test222123');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>复制到粘贴板</Text>
        <Text style={styles.instructions}>@react-native-community/clipboard</Text>
        <TouchableOpacity onPress={this.copy}>
          <Text>复制</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 50,
  },
});
