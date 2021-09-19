import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import { styles } from '../styles';

function loadPage(navigation) {
  navigation.navigate('GenerateId')
}

export const GameWithFriends = ({navigation}) => {
  return (
    <TouchableOpacity activeOpacity={.75} onPress={() => loadPage(navigation)}>
      <View style={styles.itemStyle}>
        <Text style={styles.text}>
          Multiplayer
        </Text>
      </View>
    </TouchableOpacity>
  )
};
