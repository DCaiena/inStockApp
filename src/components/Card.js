import React, { Component } from 'react';

import { View, TouchableOpacity ,StyleSheet, Text ,Image ,Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import config from '../config';
import { Actions } from 'react-native-router-flux'
const width = Dimensions.get('screen').width


export default class components extends Component {
  render() {
    const { main, txt, sec, txtView } = style
    return (
        <TouchableOpacity style={main} onPress={() => {
          console.log(this.props.screen)
          Actions.push(this.props.screen)}} >
            <View style={sec}>
              <Image  resizeMode={'contain'} style={{width:width/3 , height:300}} source={{uri:this.props.icon}} />
            </View>
            <View style={txtView}>
              <Text style={txt} >{this.props.title}</Text>
            </View>
        </TouchableOpacity>
    )
  }
}
const style= StyleSheet.create({
  main:{
    height:width/1.7,
    width:width/1.1,
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:config.colors.branco,
    marginTop:10,
    elevation:10,
    marginBottom:10
  },
  sec:{
    flex:2, 
    alignItems:'center', 
    justifyContent:'center', 
    borderBottomColor:config.colors.cinza, 
    borderBottomWidth:1
  }
  ,
  txtView:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  txt:{ 
    fontSize:20, 
    fontWeight:'bold', 
    color:'#717171', 
    textAlign:'center'}
})
