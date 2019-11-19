import React, {Component} from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

export default class LinksScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
       yourNumbers: [],
       numbers1 : [],
    };
    const luckyNumberz=[];
    this.luckyNumber5 = this.luckyNumber5.bind(this);
  }
  
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('Numbers', yourNumbers);
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Numbers');
      if (value !== null) {
        // We have data!!
        alert(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  luckyNumber5(){
    let luckyNumberz = [];
    let num1 = Math.floor(Math.random() * 69)+1;
    luckyNumberz.push(num1);
    let num2 = Math.floor(Math.random() * 69)+1;
    luckyNumberz.push(num2);
    let num3 = Math.floor(Math.random() * 69)+1;
    luckyNumberz.push(num3);
    let num4 = Math.floor(Math.random() * 69)+1;
    luckyNumberz.push(num4);
    let num5 = Math.floor(Math.random() * 69)+1;
    luckyNumberz.push(num5);
    let num6 = Math.floor(Math.random() * 26)+1;
    luckyNumberz.push(num6);
    if(!this.state.yourNumbers.length){
      this.setState({yourNumbers: luckyNumberz})
    }
    this.setState({numbers1 : luckyNumberz});
    return luckyNumberz;
  }
      
  render(){
    return (
        <View style={styles.container}>
          <View style={{  backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <View style={{width: 125, borderWidth: 1}}> 
              <Text style={{textAlign: 'center'}}>Number 1</Text>
              <Text style={{textAlign: 'center'}}>{this.state.numbers1[0]}</Text>
            </View>
            <View style={{width: 125, borderWidth: 1}}>
              <Text style={{textAlign: 'center'}}>Number 2</Text>
              <Text style={{textAlign: 'center'}}>{this.state.numbers1[1]}</Text>
            </View>
            <View style={{width: 125, borderWidth: 1}}>
              <Text style={{textAlign: 'center'}}>Number 3</Text>
              <Text style={{textAlign: 'center'}}>{this.state.numbers1[2]}</Text>
            </View>
            <View style={{width: 125, borderWidth: 1}}>
              <Text style={{textAlign: 'center'}}>Number 4</Text>
              <Text style={{textAlign: 'center'}}>{this.state.numbers1[3]}</Text>
            </View>
            <View style={{width: 125, borderWidth: 1}}>
              <Text style={{textAlign: 'center'}}>Number 5</Text>
              <Text style={{textAlign: 'center'}}>{this.state.numbers1[4]}</Text>
            </View>
            <View style={{width: 125, borderWidth: 1}} >
              <Text style={{textAlign: 'center'}}>PowerBall</Text>
              <Text style={{textAlign: 'center'}}>{this.state.numbers1[5]}</Text>
            </View>
          </View>
          <View style={{  backgroundColor: '#fff'}}>
            <Text style={{textAlign: 'center'}}>Click for your numbers</Text>
            <Button title="Press Here" onPress={this.luckyNumber5}></Button>
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
