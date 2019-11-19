import React, { Component } from 'react';

import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import config from '../config'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Actions } from 'react-native-router-flux';
// import { Container } from './styles';

const width = Dimensions.get('window').width

export default class Bar extends Component {
    render() {
        const { main, sec, txt } = style
        return (
            <View style={[main]} >
                <TouchableOpacity style={[sec,{flex:1}]} onPress={() => {Actions.pop()}} >
                    <FontAwesome5
                        name={this.props.nameL}
                        size={this.props.sizeL?this.props.sizeL:20}
                        style={[this.props.iconStyleL]}
                        color={'#fff'}
                    />
                </TouchableOpacity>
                <View style={[sec,{flex:4}]} >
                    <Text style={[txt,{letterSpacing:0}]} >{this.props.title} </Text>
                </View>
                <TouchableOpacity style={[sec,{flex:1}]} onPress={this.props.onPressR} >
                    <FontAwesome5
                        name={this.props.nameR}
                        size={this.props.sizeR?this.props.sizeR:20}
                        style={[this.props.iconStyleR]}
                        color={'#fff'}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    main: {
        backgroundColor: config.colors.vermelho,
        height: width / 5,
        flexDirection: 'row'
    },
    sec: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt:{
        fontSize:25,
        fontWeight:'bold',
        color:config.colors.branco,
        letterSpacing:2,
        textAlign:'center'
    }
})