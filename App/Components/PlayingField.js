import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default function PlayingField({element, addElementToField}) {
  return <Text style={elementStyle.element} onPress={() => addElementToField(element)}>{element.value}</Text>;
}

export const elementStyle = StyleSheet.create({
  element: {
    height: 80,
    width: 80,
    fontSize: 54,
    textAlign: 'center',
    borderWidth: 1,
  },
});
