import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={style.containerMain}>
      <View style={style.box1}>
        <Text style={style.Text1}>ini header</Text>
        </View>
      <View style={style.box2}>
        <Text style={style.Text1}>2</Text>
        </View>
      <View style={style.box3}>
        <Text style={style.Text1}>3</Text>
        </View>
      <View style={style.box4}>
        <Text style={style.Text1}>4</Text>
        </View>
        </View>
    );
  }
}
const style = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
  },
  box2: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  box3: {
    flex: 4,
    backgroundColor: 'red',
  },
  box4: {
    flex: 1,
    backgroundColor: 'green',
  },
});
