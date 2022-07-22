import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type Props = {};
export default class Qrcode extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>二维码</Text>
        <Text style={styles.instructions}>react-native-qrcode-svg</Text>
        <QRCode
          value="https://www.baidu.com"
        />
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
