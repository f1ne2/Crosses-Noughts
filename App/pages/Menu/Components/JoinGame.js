import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import { styles } from '../styles';

export const JoinGame = ({navigation}) => {
  return (
    <TouchableOpacity activeOpacity={.75} onPress={() => navigation.navigate('InputIdPage')}>
      <View style={styles.itemStyle}>
        <Text style={styles.text}>
          Join the Game via ID
        </Text>
      </View>
    </TouchableOpacity>
  )
};
