import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Share from 'react-native-share';

type Props = {};
export default class Qrcode extends Component<Props> {

  share() {
    Share.open()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        err && console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>分享</Text>
        <Text style={styles.instructions}>react-native-share</Text>
        <TouchableOpacity onPress={this.share}>
          <Text>分享</Text>
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
