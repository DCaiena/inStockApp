import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';
import Bar from '../components/Bar'
import Card from '../components/Card'
import { Actions } from 'react-native-router-flux'


export default class Main extends Component {
  constructor(){
    super()
    this.options=[
      {
          icon:'estoque',
          title:'Gerenciador de Estoque',
          screen: '_estoque_re'
      },
      {
        icon:'relatorio',
        title:'Relatorio de Estoque',
        screen:''
      },
      {
        icon:'vendas',
        title:'Vendas',
        screen:''
      }
    ]
  }
  render() {
    return (
        <View style={{flex:1}}>
            <Bar title={'InStock'} />
            <View style={{flex:1}}>
              <FlatList
              data={this.options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item,index}) => <Card icon={item.icon} screen={item.screen} title={item.title} />}
              />
            </View>
        </View>
    );
  }
}
