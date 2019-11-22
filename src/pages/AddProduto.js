import React, { Component } from 'react';

import { View, Text, Dimensions, TextInput } from 'react-native';
import Bar from '../components/Bar';
import config from '../config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const width = Dimensions.get('window').width

// import { Container } from './styles';

export default class pages extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                codigo: '',
                nome_produto:'',
                tipo: '',
                data_fabricacao: '',
                validade: '',
                lotes: '',
                unidades: '',
                preco_unidade: ''
            }
        }
    }

    async salvar() {
        try {
            if(this.props._id){
                let resp = await config.requisicao.put(this.state.form)
            }else{
                let resp = await config.requisicao.post(this.state.form)
            }
            alert('Salvo')
        } catch (error) {
            console.log(error)
            alert('error')
        }
    }

    componentDidMount(){
        this.setState({form:{...this.props}})
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <Bar nameL={'arrow-left'} title={this.props._id?'Editar Lote':'Adicionar Lote'} nameR={'save'} sizeR={25} onPressR={() => { console.log(this.state.form) }} />
                <View>
                    <View style={{ backgroundColor: config.colors.branco, marginVertical: 15, borderRadius: 10, width: width / 1.1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ borderBottomColor: config.colors.cinza, width, textAlign: 'center', marginVertical: 20, fontWeight: 'bold', fontSize: 20, color: config.colors.cinza, borderBottomWidth: 1 }} >Código</Text>
                        <TextInput
                            keyboardType={'numeric'}
                            onChangeText={(codigo) => this.setState({ form: { ...this.state.form, codigo } }) }
                            style={{ borderBottomColor: config.colors.cinza, textAlign: 'center', borderBottomWidth: 1, bottom: 15 }}
                            placeholder={'1 - 100'}
                            value={this.state.form.codigo}
                        />
                    </View>
                    <View style={{ backgroundColor: config.colors.branco, marginVertical: 15, borderRadius: 10, width: width / 1.1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ borderBottomColor: config.colors.cinza, width, textAlign: 'center', marginVertical: 20, fontWeight: 'bold', fontSize: 20, color: config.colors.cinza, borderBottomWidth: 1 }} >Descrição</Text>
                        <View >
                            <Input
                                placeholder="nome do produto/marca"
                                onChangeText={(nome_produto) =>  this.setState({ form:{...this.state.form, nome_produto} }) }
                                value={this.state.form.nome_produto}
                            />
                            <Input
                                placeholder="o que é? ex: Arroz, feijão"
                                onChangeText={(tipo) => this.setState({form:{...this.state.form, tipo }}) }                               
                                value={this.state.form.tipo}
                            />
                                    <Input
                                placeholder="Data de fabricação"
                                onChangeText={(data_fabricacao) => this.setState({ form:{...this.state.form, data_fabricacao }})}
                                value={this.state.form.data_fabricacao}
                            />
                            <Input
                                placeholder="Validade"
                                onChangeText={(validade) => this.setState({ form:{...this.state.form, validade} })}
                                value={this.state.form.validade}
                            />
                            <Input placeholder="Qnt. de Lotes"
                                keyboardType={'numeric'}
                                onChangeText={(lotes) => this.setState({form:{ ...this.state.form, lotes} }) }
                                value={this.state.form.lotes}
                            />
                            <Input placeholder="Unidade/ Lote"
                                keyboardType={'numeric'}
                                onChangeText={(unidades) => this.setState({ form:{...this.state.form, unidades} })}
                                value={this.state.form.unidades}
                            />
                            <Input placeholder="Unidade/ Lote"
                                keyboardType={'numeric'}
                                onChangeText={(preco_unidade) => this.setState({ form:{ ...this.state.form, preco_unidade} })}
                                value={this.state.form.preco_unidade}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

class Input extends React.Component {
    render() {
        return (
            <TextInput
                style={{ borderBottomColor: config.colors.cinza, borderBottomWidth: 1, bottom: 15 }}
                placeholder={this.props.placeholder}
                keyboardType={this.props.keyboardType}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
            />
        )
    }
}
