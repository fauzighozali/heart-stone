import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Home from '../pages/home';
import Detail from '../pages/detail';

const AppRoute  = createStackNavigator(
    {
        toHome : {
            screen : Home,
            navigationOptions: () => ({
                headerLeft: null,
                headerTransparent : true
            })
        },
        toDetail : {
            screen : Detail,
            navigationOptions: () => ({
                headerLeft: null,
                headerTransparent : true
            })
        }
    },
    {
        initialRouteName: "toHome"
    }
)

export const AppContainer = createAppContainer(AppRoute)