import React, { Component } from 'react';

import { View, TextInput } from 'react-native';
import config from '../config'
import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { Container } from './styles';

export default class components extends Component {
  render() {
    return (
        <View style={[{backgroundColor:config.colors.cinza, margin:10 ,borderRadius:50, alignItems: 'center' , flexDirection:'row'}]} >
            <TextInput
            placeholder={this.props.placeholder}
            style={{flex:1, marginHorizontal:27, }}
            onChangeText={this.props.handleChangeText}
            />
            <FontAwesome5
            size={20}
            style={{marginHorizontal:30}}
            name={'search'}
            color={config.colors.branco}
            />
        </View>
    )
  }
}
