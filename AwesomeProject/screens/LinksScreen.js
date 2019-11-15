import React, {Component} from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

export default class LinksScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      // numbers1 : [],
    };
    const luckyNumberz=[];
    this.luckyNumber5 = this.luckyNumber5.bind(this);
  }
  
  luckyNumber5(){
    let luckyNumberz = [];
    let num1 = Math.floor(Math.random() * Math.floor(70));
    luckyNumberz.push(num1, ',');
    let num2 = Math.floor(Math.random() * Math.floor(70));
    luckyNumberz.push(num2, ',');
    let num3 = Math.floor(Math.random() * Math.floor(70));
    luckyNumberz.push(num3, ',');
    let num4 = Math.floor(Math.random() * Math.floor(70));
    luckyNumberz.push(num4,',');
    let num5 = Math.floor(Math.random() * Math.floor(70));
    luckyNumberz.push(num5,',');
    let num6 = Math.floor(Math.random() * Math.floor(25));
    luckyNumberz.push(num6);
    this.setState({numbers1 : luckyNumberz});
    return luckyNumberz;
  }
      
  render(){
    luckyNum = this.state.numbers1;
    alert(luckyNum);
    return (
        <View style={styles.container}>
          <View style={{  backgroundColor: '#fff'}}>
            <Text style={{textAlign: 'center'}}>Click for your numbers</Text>
            <Button title="Press Here" onPress={this.luckyNumber5}></Button>
          </View>
          <View style={{  backgroundColor: '#fff' }}>
            <Text style={{textAlign: 'center'}}>{this.state.numbers1}</Text>
          </View>
        </View>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Numbers',
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
