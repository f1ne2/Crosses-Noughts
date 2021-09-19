import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../styles';
import { generateId } from '../../../functions/computationFunctions';
import { sendDataRequest } from '../../../functions/api';

export const GameThisDevice = ({navigation}) => {
  return (
      <TouchableOpacity activeOpacity={.75} onPress={() => {
        let loading = false;
        const id = generateId('/single');
        const initialState = [
          {value: '', key: 0, id: id, count: 0},
          {value: '', key: 1, id: id, count: 0},
          {value: '', key: 2, id: id, count: 0},
          {value: '', key: 3, id: id, count: 0},
          {value: '', key: 4, id: id, count: 0},
          {value: '', key: 5, id: id, count: 0},
          {value: '', key: 6, id: id, count: 0},
          {value: '', key: 7, id: id, count: 0},
          {value: '', key: 8, id: id, count: 0},
        ];
        sendDataRequest(initialState)
          .then((data) => {
            loading = true;
          });
        navigation.navigate('Game', {text: `${initialState[0].id}`})}}>
        <View style={styles.itemStyle}>
          <Text style={styles.text}>
            Single Game
          </Text>
        </View>
      </TouchableOpacity>
  )
};
