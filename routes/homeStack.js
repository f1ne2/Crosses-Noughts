import React from 'react';
import Home from "../App/pages/Home";
import GameThisDevice from "../App/pages/GameThisDevice";
import Menu from "../App/pages/Menu/Menu";
import GenerateId from "../App/pages/GenerateId";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {InputIdPage} from "../App/pages/InputIdPage";
const HomeStack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName='Main'>
        <HomeStack.Screen
          name='Main'
          component={Home}
          options={{title: 'Main Page'}}
        />
        <HomeStack.Screen
          name='Menu'
          component={Menu}
          options={{title: 'Menu Page'}}
        />
        <HomeStack.Screen
          name='Game' component={GameThisDevice}
          options={{title: 'Single Game'}}
        />
        <HomeStack.Screen
          name='GenerateId'
          component={GenerateId}
          options={{title: 'Multiplayer'}}
          />
          <HomeStack.Screen
            name='InputIdPage'
            component={InputIdPage}
            options={{title: 'Join the Game'}}
            />
      </HomeStack.Navigator>
  </NavigationContainer>);
}
