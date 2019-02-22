import React, {Component} from 'react';
import {StyleSheet, Alert, Text, View, TextInput, Image, ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content, Header, Left, Body, Right} from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class Pagina2 extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='paper-plane' size={20}
      style={{color: tintColor}}></Icon>
    )
  };

  state = {
    imageSource : "https://s3.amazonaws.com/imagem-ilumino-comercio/semImagem.jpg",
    nomeProprietario:'',
    descricao:'',
    valor:'',
  }

  salvar = () => {
      const {nomeProprietario, descricao, valor, imageSource} = this.state;

      Alert.alert(`Nome: ${nomeProprietario} \n Descricao: ${descricao} \n Valor: ${valor} \n Imagem: ${imageSource}`)
      this.setState({
        imageSource:"https://s3.amazonaws.com/imagem-ilumino-comercio/semImagem.jpg",
        nomeProprietario:'',
        descricao:'',
        valor:'',
      })
  }

  takeImage () {
    const options = {
      quality: 0.5,
      title:'Selecione uma imagem',
      takePhotoButtonTitle:'Através da camera',
      chooseFromLibraryButtonTitle:'Através da galeria',
      cancelButtonTitle:'Cancelar'
    }

    ImagePicker.showImagePicker(options, (response) => {
      if(response.didCancel){
          //Alert.alert('Cancelado!')
      }else if(response.error){
          Alert.alert(response.error)
      }else {
        this.setState({imageSource: response.uri});
      }
    });
  }

  takePicCam (){
    const options = {
      quality: 0.5,
    }

    ImagePicker.launchCamera(options, (response) => {

      if(response.didCancel){
          Alert.alert('Cancelado!')
      }else if(response.error){
          Alert.alert(response.error)
      }else {
        this.setState({imageSource: response.uri});
      }
    });
  }

  takePicGallery () {
    const options = {
      quality: 0.5
    }
    ImagePicker.launchImageLibrary(options, (response) => {

      if(response.didCancel){
        Alert.alert('Cancelado!')
      }else if(response.error){
        Alert.alert(response.error)
      }else {
        this.setState({imageSource: response.uri});
      }
    });
  }

  render() {
    return (
      <Container>
        <Content style={{backgroundColor:'#F5FCFF'}}>
          <View style={{ justifyContent:'flex-start',
          alignItems:'flex-start',
          flexDirection:'row'}}>
          <Image style={{
              flex:2,
              height:220,
              width: 220,
              marginTop:20,
              marginLeft:20,
              borderColor:'#d2d2d2',
              borderWidth:1,
              borderRadius:10,
          }}
          source = {{uri:this.state.imageSource}} />
            <View style={{flex:1}}>
              <TouchableOpacity style={{
                flex:1,
                marginTop:20,
                marginRight:20,
                marginLeft:2,
                borderColor:'#d2d2d2',
                borderWidth:1,
                backgroundColor:'white',
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center',
                height:40,
              }}

              onPress={
                this.takeImage.bind(this)
              }>
                  <Text>Imagem</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flex:1,
                marginTop:20,
                marginRight:20,
                marginLeft:2,
                borderColor:'#d2d2d2',
                borderWidth:1,
                backgroundColor:'white',
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center',
                height:40,
              }}

              onPress={
                this.takePicCam.bind(this)
              }>
                  <Text>Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flex:1,
                marginTop:20,
                marginRight:20,
                marginLeft:2,
                borderColor:'#d2d2d2',
                borderWidth:1,
                backgroundColor:'white',
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center',
                height:40,
              }}

              onPress={
                this.takePicGallery.bind(this)
              }>
                  <Text>Galeria</Text>
              </TouchableOpacity>

            </View>
          </View>
        { /*  <View style={{
            marginHorizontal:20
          }}>
          <TouchableOpacity style={{
            marginTop:10,
            borderColor:'#d2d2d2',
            borderWidth:1,
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center',
            height:40,
          }}

          onPress={
            this.takeImage.bind(this)
          }>
              <Text>Selecionar Imagem</Text>
          </TouchableOpacity>
       {/*
            <TouchableOpacity style={{
              marginTop:10,
              borderColor:'#d2d2d2',
              borderWidth:1,
              backgroundColor:'white',
              alignItems:'center',
              justifyContent:'center',
              height:40,
            }}

            onPress={
              this.takePicCam.bind(this)
            }>
                <Text>Selecionar Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              marginTop:10,
              borderColor:'#d2d2d2',
              borderWidth:1,
              backgroundColor:'white',
              alignItems:'center',
              justifyContent:'center',
              height:40,
            }}
            onPress={
              this.takePicGallery.bind(this)
            }>
                <Text>Selecionar Galeria</Text>
            </TouchableOpacity>
            }
          </View> */}
          <View>
          <TextInput style={{
            marginTop:10,
            justifyContent:'flex-start',
            paddingHorizontal: 15,
            alignSelf: 'stretch',flex:2,
            borderBottomWidth:1, borderBottomColor:'#d2d2d2', paddingBottom:0,
            marginHorizontal:20,
          }}
          onChangeText={ (text)=> {
              this.setState({nomeProprietario:text})
          }}
          value={this.state.nomeProprietario}
          placeholder='Entre nome proprietario'/>

          <TextInput style={{
            marginTop:10,
            justifyContent:'flex-start',
            paddingHorizontal: 15,
            alignSelf: 'stretch',flex:2,
            borderBottomWidth:1, borderBottomColor:'#d2d2d2', paddingBottom:0,
            marginHorizontal:20,
          }}
          onChangeText={ (text)=> {
              this.setState({descricao:text})
          }}
          value={this.state.descricao}
          placeholder='Entre nome uma descricao'/>

          <TextInput style={{
            marginTop:10,
            justifyContent:'flex-start',
            paddingHorizontal: 15,
            alignSelf: 'stretch',flex:2,
            borderBottomWidth:1, borderBottomColor:'#d2d2d2', paddingBottom:0,
            marginHorizontal:20,
          }}
          onChangeText={ (text)=> {
              this.setState({valor:text})
          }}
          value={this.state.valor}
          placeholder='Valor R$ xxx,xx'/>

          </View>
          <TouchableOpacity style={{
            alignItems:'center', justifyContent:'center',
            height:40, marginHorizontal:20, backgroundColor:'#fff',
            borderRadius:10, borderWidth:1, borderColor:'#d2d2d2', marginTop:30
          }}
          onPress={
            this.salvar
          }>
            <Text>SALVAR</Text>
          </TouchableOpacity>
        </Content>
      </Container>
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
