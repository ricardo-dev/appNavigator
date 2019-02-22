import React, {Component} from 'react';
import {Platform} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

import Principal from './principal';
import Pagina1 from './pagina1';
import Pagina2 from './pagina2';
import Pagina3 from './pagina3';

const Tabs = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Principal,
        },
        Pagina1: {
            screen: Pagina1,
        },
        Pagina2: {
            screen: Pagina2,
        },
        Pagina3: {
            screen: Pagina3,
        },
    },
    {
        fontSize:10,
        animationEnable: true,
        swipeEnable: true,
        lazy:true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style:{
                ...Platform.select({
                    android: {
                        backgroundColor:'#fff',
                        //borderColor:'#000'
                        //borderTopColor:'#000',
                    }
                })
            },
            indicatorStyle:{
                backgroundColor: 'white',
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true,
            labelStyle: {
                fontSize: 10,
            },
        }
    }
);

Tabs.navigationOptions = () => ({
    header:null,
});

export default Tabs;
