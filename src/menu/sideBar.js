import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {Drawer, Container, Header, Content, Button, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SideBar extends Component {

    funcaoEditar = () => {
        Alert.alert('Editar selecionado!');
    }

    funcaoHome = () => {
        Alert.alert('Home selecionado!');
    }

    funcaoDados = () => {
        Alert.alert('Dados selecionado!');
    }

    funcaoConfiguracao = () => {
        Alert.alert('Config selecionado!');
    }

    funcaoSair = () => {
        Alert.alert('Sair selecionado!');
    }

    render() {
        return(
            <View style={{
                flex:1,
                backgroundColor:'#F5FCFF',
            }}>

            <View style={{
                //height: 200,
                backgroundColor: '#384448',
                paddingBottom:20,
                alignItems: 'center'
            }}>


            <Image source={require('../assets/fotoRicardo.jpg')}
                style={{
                    width: 115, height: 115, borderRadius:100,
                    marginTop:20, borderWidth:2, borderColor:'#53666c'
                }} />
                <Text style={{
                        color:'#fff',
                        fontWeight: 'bold',
                        marginTop:15,
                        fontSize:14
                    }}>Nome Usuario</Text>
                <TouchableOpacity
                    onPress={
                        this.funcaoEditar
                    }>
                    <Text style={{
                        color:'#fff',
                        fontWeight: 'bold',
                        marginTop:5,
                        fontSize:14
                    }}>Editar</Text>
                </TouchableOpacity>

            </View>

            <View style={{
                marginTop:20
            }}>
                <ScrollView>

                    <TouchableOpacity onPress = {
                        this.funcaoHome
                    }>
                        <View style={{
                            flexDirection:'row', marginHorizontal:30, paddingBottom:0,
                        }}>

                            <Icon name="home"
                                size={23}
                                color='#53666c'
                                style={{
                                    paddingBottom:10
                                }}/>
                            <Text style={{
                                fontSize:14, color:'#53666c', marginLeft: 30, marginTop:3
                            }}>
                                Tela inicial
                            </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {
                        this.funcaoDados
                    }>
                        <View style={{
                            flexDirection:'row', marginTop:10, marginHorizontal:30, paddingBottom:0,
                        }}>

                            <Icon name="user"
                                size={23}
                                color='#53666c'
                                style={{
                                    paddingBottom:10
                                }}/>
                            <Text style={{
                                fontSize:14, color:'#53666c', marginLeft: 30, marginTop:3
                            }}>
                                Meus dados
                            </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {
                        this.funcaoConfiguracao
                    }>
                        <View style={{
                            flexDirection:'row', marginTop:10, marginHorizontal:30, paddingBottom:0,
                        }}>

                            <Icon name="cogs"
                                size={23}
                                color='#53666c'
                                style={{
                                    paddingBottom:10
                                }}/>
                            <Text style={{
                                fontSize:14, color:'#53666c', marginLeft: 30, marginTop:3
                            }}>
                                Configuração
                            </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {
                        this.funcaoSair
                    }>
                        <View style={{
                            flexDirection:'row', marginTop:10, marginHorizontal:30,
                        }}>

                            <Icon name="sign-out"
                                size={23}
                                color='#53666c'
                                style={{
                                    paddingBottom:10
                                }}/>
                            <Text style={{
                                fontSize:14, color:'#53666c', marginLeft: 30, marginTop:3
                            }}>
                                Sair
                            </Text>

                        </View>
                    </TouchableOpacity>


                    <View style={{
                        flex:1,
                        height:300,
                    }}>

                    </View>


                </ScrollView>

            </View>

            </View>
        );
    }
}
