import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Container, Content, Header, Left, Body} from 'native-base';

export default class Info extends Component {

    static navigationOptions = {
        header:null
    }

    voltar = () => {
        this.props.navigation.goBack();
    }

    render(){
       return( 
           <Container>
               <Header style={styles.androidHeader}
                androidStatusBarColor="#000"
                iosBarStyle="light-content">
                   <Left style={{
                       flex:1,
                       marginRight: 2
                   }}>
                    <Icon name="arrow-circle-left" size={23} color='white' 
                     onPress={
                         this.voltar
                     }></Icon>
                   </Left>
                   <Body style={{
                       flex:2,
                   }}>
                    <Text style={{
                            fontSize:20, 
                            color:'white'
                        }}>meu App</Text>
                   </Body>
               </Header>
               <Content>
                   <Text style={{
                       marginTop:40,
                       marginHorizontal: 20,
                       fontSize:18,
                       justifyContent:'center',
                       alignItems:'center'
                   }}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus vestibulum orci a maximus. Cras iaculis leo sit amet dui hendrerit, et dapibus ex dictum. Duis consequat sagittis lacus, at varius arcu tempus non. Ut tristique ante massa. Integer massa sem, posuere eu erat ac, sollicitudin placerat elit. Maecenas eget ex sit amet erat interdum porta. Curabitur semper justo eu risus ultrices, ac aliquam felis ultrices. Sed egestas a leo vel venenatis. Morbi vulputate ex sit amet sodales feugiat. Suspendisse ut tempor erat, malesuada iaculis mauris.
                   </Text>
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
    androidHeader: { 
      ...Platform.select({ 
      android: { 
        //marginTop: StatusBar.currentHeight,
        //StatusBarsetBackgroundColor("#D3D3D3"),
        //StatusBarsetBarStyle("dark-content"),
        backgroundColor: '#000',
        //StatusBarColor
        //StatusBar
       } 
      }) },
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