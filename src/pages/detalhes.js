import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Detalhes extends Component {

  static navigationOptions = {
    header:null,
  }

  state = {
      imagem : this.props.navigation.state.params.imovel.imagem,
      proprietario: this.props.navigation.state.params.imovel.proprietario,
      descricao: this.props.navigation.state.params.imovel.descricao,
      valor: this.props.navigation.state.params.imovel.valor,
  }

  render() {
    return (
      <ScrollView>

        <Image style={{
          height:300,
          width: "100%",
        }}
        source={this.state.imagem}/>

        <View style={{
          flex:1,
          marginHorizontal:20,
        }}>

          <Text style={{
            marginTop: 40,
            fontSize: 20,
            color:'#000',
            fontWeight:'bold',
          }}>{this.state.descricao}</Text>
          <Text style={{
            marginTop:10,
            fontSize:18,
          }}>Falar com: {this.state.proprietario}</Text>
          <Text style={{
            marginTop:10,
            fontSize:25,
            fontWeight:'bold'
          }}>Valor: R$ {this.state.valor} </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
