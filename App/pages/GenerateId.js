import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import { styles } from './Menu/styles'
import { generateId } from '../functions/computationFunctions';
import {sendIdRequest} from '../functions/api';

const load = (result) => {
  sendIdRequest([result])
    .then((data) => {
      console.log(data)
    });
}

const GenerateId = () => {
  const [message, setNewMessage] = useState('');
  return (
    <View style={styles.mainPageContainer}>
      <TouchableOpacity activeOpacity={.75} onPress={() => {
       const result = generateId('/multi')
        setNewMessage(result);
       load(result)
      }}>
        <View style={styles.itemStyle}>
          <Text style={styles.text}>
            Generate Id
          </Text>
        </View>
      </TouchableOpacity>
      <TextInput value={message} style={styles.idText} />
    </View>
  )
}

export default GenerateId;
