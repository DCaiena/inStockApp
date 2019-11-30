import React, { Component } from 'react';

import { View, Text, ScrollView, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Bar from '../components/Bar'
import Input from '../components/Input'
import config from '../config'
import { Actions } from 'react-native-router-flux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const width = Dimensions.get('window').width


export default class EstoqueRelatorio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            produtos: [],
            refresh: false
        }
    }

    componentDidMount() {
        this.getProdutos()
        
        // this.state.produtos.unshift({
        //             _id: '23',
        //             codigo: '244',
        //             nome_produto: 'Arroz',
        //             tipo: 'Arroz',
        //             data_fabricacao: '23/3/333',
        //             validade: '32/03/4333',
        //             lotes: '2',
        //             unidades_por_lote: '3',
        //             preco_unidade: '34'
        //     })
        this.setState({refresh:!this.state.refresh})
        //this.getProdutos()
    }
    async getProdutos() {
        try {
            let produtos = await config.requisicao.get('produto')
            produtos.map(produto =>{
                this.state.produtos.unshift(produto)
            })
            this.setState({ refresh: !this.state.refresh })
        } catch (error) {
            console.log(error, "2")
        }
    }

    async pesquisa(produto) {
        let produtos = await config.requisicao.get('/produtos')

        this.setState({ produtos })
    }

    async excluir(produto){
        let atualizarLista = await config.requisicao.get(`produto/${produto._id}`)
        this.setState({produtos:atualizarLista})
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Bar nameL={'arrow-left'} title={'Pesquisar Produtos'} nameR={'plus'} sizeR={20} onPressR={() => Actions.push('_add_produto')} />
                <View style={{ backgroundColor: config.colors.branco, borderRadius: 5, margin: 10 }}>
                    <Input placeholder={'Pesquisar Produtos'} handleChangeText={produto => this.pesquisa(produto)} />
                    <FlatList
                        data={this.state.produtos}
                        refreshing={this.state.refresh}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => <Item {...item}  excluir={() => this.excluir(item)} handleOnPress={() => { Actions.push('_add_produto',{...item}) }}/>}
                    />
                </View>


            </View>
        );
    }

}

class Item extends React.Component {
    render() {
        return (
            <View style={{flexDirection:'row', flex:1}}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                marginVertical: 8,
                flex:1,
                marginHorizontal:10,
                alignSelf: 'center',
                justifyContent: 'space-around',
                borderBottomColor: config.colors.preto,
                borderBottomWidth: 1
            }}
                onPress={this.props.handleOnPress}
            >

                <Text>{this.props.nome} </Text>
                <Text>{this.props.lote} Uni</Text>
                <Text>R${this.props.valor}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin:10,justifyContent:'center', alignItems:'center'}} 
            onPress={this.props.excluir}
            >
                <FontAwesome5
                    name={'times'}
                    size={20}
                    style={{alignSelf:'center', right:5}}
                    />
            </TouchableOpacity>
            </View>
        )
    }
}