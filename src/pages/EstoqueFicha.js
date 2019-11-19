import React, { Component } from 'react';

import { View, Text, ScrollView, TextInput,FlatList , TouchableOpacity , Dimensions } from 'react-native';
import Bar from '../components/Bar'
import Input from '../components/Input'
import config from '../config'
import { Actions } from 'react-native-router-flux'

const width = Dimensions.get('window').width


export default class EstoqueRelatorio extends Component {

    constructor(props){
        super(props)
        this.state={
            produtos:[]
        }
    }

    componentDidMount(){
        
    }
    async getProdutos(){
        let produtos = await config.requisicao.get()
        this.setState({produtos})
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Bar  nameL={'arrow-left'}  title={'Produtos'} nameR={'plus'} sizeR={20} onPressR ={() => Actions._add_produto() } />
                    <View style={{ backgroundColor:config.colors.branco, borderRadius:5, margin:10}}>
                      <Input/>
                        <FlatList
                        data={this.state.produtos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => <Item />}
                        />
                    </View>

              
            </View>
        );
    }
}

class Item extends React.Component{
    render(){
        return(
        <TouchableOpacity style={{flexDirection:'row', marginVertical:8, width:width/1.1, alignSelf:'center' ,justifyContent:'space-around', borderBottomColor:config.colors.preto, borderBottomWidth:1}} >
            <Text> {this.props.nome_produto} </Text>
            <Text>{this.props.unidades}</Text>
            <Text>{this.props.preco}</Text>
        </TouchableOpacity>
        )
    }
}