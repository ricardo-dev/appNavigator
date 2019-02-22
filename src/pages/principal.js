import React, {Component} from 'react';
import {Alert, ScrollView,TouchableOpacity,StyleSheet, Text, View, Platform, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content, Header, Right, Left, Body, Drawer} from 'native-base';
import SideBar from '../menu/sideBar';

export default class Principal extends Component {

  filtro = () => {
    Alert.alert('Filtro selecionado!');
  }

  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='home' size={20}
      style={{color: tintColor}}></Icon>
    )
  };

  direcionarInfo = () => {
   // Alert.alert('Info')
   this.props.navigation.navigate('Info');
  }

  abrirMenu = () => {
    //Alert.alert('Menu')
    this.openDrawer();
  }

  render() {
    return (
      <Drawer
        ref = { (ref) => {this.drawer = ref;} }
        content = { <SideBar navigator = {this.navigator} /> }
        onClose = {() => this.closeDrawer}>

        <Container>

        <Header style={styles.androidHeader}
          androidStatusBarColor="#000"
          iosBarStyle="light-content">
          <Left style={{
            flex:1, marginRight:2
          }}>
            <Icon name="navicon" color="white" size={23}
              onPress={
                this.abrirMenu
              } ></Icon>
          </Left>
          <Body style={{flex:1}}>
              <Text style={{
                fontSize:20,
                color:'white'
              }}>meu App</Text>
          </Body>
          <Right style={{
            flex:1, marginLeft:2
          }}>
            <Icon name="info-circle" color="white" size={23}
              onPress={
                this.direcionarInfo
              }></Icon>
          </Right>
        </Header>


            <Content style={{
              backgroundColor:'#F5FCFF',
            }}>




            <ScrollView>


            <View style={{
              marginTop:20,
              flexDirection:'row',
              marginLeft:10,
              marginRight:10,
              height:130
            }}>
              <Image source={require('../assets/casa1.jpg')}
                  style={{
                    height:120, width:120, borderRadius:10
                  }}/>

              <Text style={{
                flex:1,
                marginTop:10,
                marginLeft:15,
                fontSize: 15
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus vestibulum orci a maximus. Cras iaculis leo sit amet dui hendrerit, et dapibus ex dictum.
              </Text>

            </View>

            <View style={{
              marginTop:20,
              flexDirection:'row',

              backgroundColor:'#fff',
              borderRadius:10,
              borderColor:'#d2d2d2',
              borderWidth:1,
              height:42,
              marginHorizontal: 10,
            }}>
              <TextInput style={{
                justifyContent:'flex-start',
                paddingHorizontal: 15,
                alignSelf: 'stretch',flex:2
              }}
              placeholder='Buscar aqui!'/>
              <TouchableOpacity onPress={
                this.filtro
              }>
              <Icon name="sliders" size={20} color="#15a1f8" style={{
                alignItems:'flex-end', marginRight:20, marginTop:10
              }}></Icon>
              </TouchableOpacity>
            </View>

            <View style={{
              flex:1,
              marginHorizontal:10,
              justifyContent:'center',
              alignItems:'center',
              marginTop:20,
              height:200,
            }}>
              <Image style={{
              flex:1,
              height:200,
              width: 338,
              borderRadius:10,
              }} source={require('../assets/casa2.jpg')}/>
            </View>

            <View style={{
              marginHorizontal:10,
              paddingHorizontal:10,
              paddingVertical:10,
            }}>

              <Text style={{
                fontSize:15,
              }}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam at sapien turpis. Aliquam tempus
              eu ipsum id luctus. Nunc id porta felis. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Sed in malesuada
              tortor, eu suscipit orci. Vestibulum interdum leo at leo dignissim laoreet.
              Pellentesque malesuada aliquam dolor in pellentesque.
              </Text>

            </View>

</ScrollView>
            </Content>

        </Container>

        </Drawer>
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
  androidHeader: {
    ...Platform.select({
    android: {
      //marginTop: StatusBar.currentHeight,
      //StatusBarsetBackgroundColor("#D3D3D3"),
      //StatusBarsetBarStyle("dark-content"),
      backgroundColor: '#000',
      elevation:1,
      shadowColor:'#000',
      shadowOffset:{width:1, height:2},
      shadowOpacity:0.8,
      //StatusBarColor
      //StatusBar
     }
   }),
   },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: 'flex-end',
        //textAlign: 'center',
        //flex: 1
       }
      })
  },
});
