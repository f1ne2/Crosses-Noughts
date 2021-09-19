import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput, View} from "react-native";
import { styles } from './Menu/styles';

const LoadGame = (navigation, text) => {
  navigation.navigate('Game', {text: `${text}`});
}

export const InputIdPage = ({navigation}) => {
  const [text, onChangeText] = useState("");
  
  return (
      <SafeAreaView>
      <TextInput  style={stylesHere.pageContainer} onChangeText={onChangeText}
                  placeholder='Put Id Here' />
    <TouchableOpacity style={styles.mainPageContainer} activeOpacity={.75} onPress={() => LoadGame(navigation, text)}>
      <View style={styles.itemStyle}>
        <Text style={styles.text}>
          Join
        </Text>
      </View>
    </TouchableOpacity>
      </SafeAreaView>
  )
};


const stylesHere = StyleSheet.create({
  pageContainer: {
    marginTop: '10%',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1
  }
})
