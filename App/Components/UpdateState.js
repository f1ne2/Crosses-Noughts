import React from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import {styles} from '../pages/Menu/styles';

export default function UpdateState(props) {
  const {navigation, id, loading, setLoading} = props;
  
  return <TouchableOpacity style={styles.mainPageContainer} activeOpacity={.75}
                           onPress={() => LoadGame(navigation, id,loading, setLoading)}>
          <View style={styles.itemStyle}>
            <Text style={styles.text}>
              Update state
            </Text>
          </View>
        </TouchableOpacity>
}

const LoadGame = (navigation, text, loading, setLoading) => {
  setLoading(false)
  navigation.navigate('Game', {text: `${text}`});
}
