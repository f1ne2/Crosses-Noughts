import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Alert,
  View,
  FlatList,
} from 'react-native';
import {styles} from './App';
import {Button} from "react-native-web";

export default function PlayingField({element, addElementToField}) {
  return <Text style={styles.element} onPress={() => addElementToField(element)}>{element.value}</Text>;
}
