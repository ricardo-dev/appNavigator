import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class Pagina3 extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='map-marker' size={20}
      style={{color: tintColor}}></Icon>
    )
  };

  state = {
    pontos : [
      {
        titulo:'Titulo 1',
        descricao:'Descricao 1',
        latitude:-16.648574,
        longitude:-49.148919,
      },
      {
        titulo:'Titulo 2',
        descricao:'Descricao 2',
        latitude:-16.652312,
        longitude:-49.144901,
      },
      {
        titulo:'Titulo 3',
        descricao:'Descricao 2',
        latitude:-16.645735,
        longitude:-49.142283,
      },
    ],
    pontoInicial: {
      latitude:-16.647188,
      longitude:-49.145394,
    },
  }

  /* ## Capturar posicao via GPS
  capturarPosicao(){
  navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}})=>{
          this.setState({region: {
              latitude,
              longitude,
              latitudeDelta:0.02,
              longitudeDelta:0.02
          }})
      }, // sucesso
      ()=>{
          Alert.alert('Favor, verifique se local está ativado!');
      }, // erro
      {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,
      } // config
  )
}
  */

  render() {
    return (
      <View style={{
        flex:1,
      }}>
      <MapView
        provider = {PROVIDER_GOOGLE}
        style={{flex:1}}
        region = {{
          latitude: this.state.pontoInicial.latitude,
          longitude: this.state.pontoInicial.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        showUserLocation={false}>

        <MapView.Marker
          coordinate={{
            latitude:  this.state.pontoInicial.latitude,
            longitude: this.state.pontoInicial.longitude,
          }}
          style={{
            width:10,
            height:10,
          }}
          image={require('../assets/iconmap.png')}
          title='Estou aqui!'
          description = 'Comentario aqui!'
          pinColor = '#15a1f8'
        />
        {this.state.pontos.map( (value, index)=> {
          return(
            <View key={index}>
              <MapView.Marker
                coordinate={{
                  latitude: value.latitude,
                  longitude: value.longitude,
                }}
                title={value.titulo}
                description = {value.descricao}
                image={require('../assets/Home-Icon.png')}
                pinColor = 'blue' />
            </View>
          );
        })}

      </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent:'center',
    alignItems:'center',
  },
});
