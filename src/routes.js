import React, { Component } from 'react';

import { View } from 'react-native';
import { Scene, Stack ,Router} from 'react-native-router-flux'

import Main from './pages/Main'
import EstoqueRelatorio from './pages/EstoqueFicha'
import AddProduto from './pages/AddProduto'
// import { Container } from './styles';

export default class Routes extends Component {
  render() { 
      return(
        <View style={{backgroundColor:'#EAEAEA', flex:1}} >
            <Router> 
                <Stack>
                    <Scene key={'_main'} component={Main}   hideNavBar />
                    <Scene key={'_estoque_re'} component={EstoqueRelatorio}   hideNavBar />
                    <Scene key={'_add_produto'} component={AddProduto} hideNavBar />
                </Stack>
            </Router>
          </View>
      ) 
   
  }
}
