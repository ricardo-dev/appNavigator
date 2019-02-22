import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Pagina1 extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='th-list' size={20}
      style={{color: tintColor}}></Icon>
    )
  };

  state = {
    casas : [
      {
        id:1,
        imagem:require('../assets/lista/casa1.jpg'),
        proprietario:'Eduardo dos Santos',
        descricao:'Ótima localidade, vale a pena conferir',
        valor:1000.00
      },
      {
        id:2,
        imagem:require('../assets/lista/casa2.jpg'),
        proprietario:'Heitor dos Santos',
        descricao:'A melhor casa de todos os tempos',
        valor:1000.00
      },
      {
        id:3,
        imagem:require('../assets/lista/casa3.jpg'),
        proprietario:'Maria Laura',
        descricao:'Se você procura beleza e qualidade, esta no lugar certo!',
        valor:1000.00
      },
      {
        id:4,
        imagem:require('../assets/lista/casa4.jpeg'),
        proprietario:'Aquiles dos Santos',
        descricao:'Não deixe que eu te fale, venha e descubra!',
        valor:1000.00
      },
    ]
  }

  renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('Detalhes', {imovel: item})
      }}>
        <View style={{
          //height:250,
          padding:10,
          backgroundColor: '#fff',
          borderColor: '#d2d2d2',
          borderWidth: 1,
          marginHorizontal:20,
          marginVertical:10,
          flex:1,
          borderRadius:10,
        }}>

          <Image
          style={{
            height:180,
            width:"100%",

            marginRight:5,
          }}
          source={item.imagem}/>

          <View style={{
            flex:1,
            marginBottom:10,
            marginLeft:10,
          }}>
            <Text style={{
              fontSize:14,
              color:'#15a1f8',
              marginTop:10,
            }}>{item.proprietario}</Text>
            <Text style={{
              fontSize:18,
              color:'#000',
              marginTop:10,
            }}>{item.descricao}</Text>
            <Text style={{
              fontSize:18,
              color:'#000',
              fontWeight: 'bold',
            }}>Valor: R$ {item.valor} </Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{
        flex:1,
        backgroundColor: '#f5fcff',

      }}>
        <View style={{
          marginTop:20,
        }}>
          <FlatList
            style={{
            }}
            contentContainerStyle={{
              pading: 25,
            }}
            data={this.state.casas}
            keyExtractor = {item => item.id.toString()}
            renderItem = {this.renderItem}
          />
        </View>
      </View>
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
