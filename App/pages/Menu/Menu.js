import React from 'react';
import { GameThisDevice } from './Components/GameThisDevice';
import { GameWithFriends } from './Components/GameWithFriends';
import {Text, View} from 'react-native';
import { styles } from './styles';
import {JoinGame} from './Components/JoinGame';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.mainPageContainer}>
      <Text style={styles.headerText}>
        Please, select option
      </Text>
      <GameThisDevice navigation={navigation} />
      <GameWithFriends navigation={navigation} />
      <JoinGame navigation={navigation} />
    </View>
  )
}

export default Menu;
