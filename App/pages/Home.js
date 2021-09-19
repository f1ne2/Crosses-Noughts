import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

const Home = ({navigation}) => {
  return (
    <View style={styles.mainPageContainer}>
      <Text style={styles.headerStyle}>
        Welcome to the Crosses and Noughts game!
      </Text>
      <Image style={styles.mainImage} source={{uri: 'https://lh3.googleusercontent.com/e_VFwqAPTHww6V_ge9-w9r_Gb5riPWmUUSV1x7cwSW_j2vRvPXW9i5AwF5bKj2nfAwY=w512'}} />
      <Text style={styles.basicText}>
        You can play with your friends. Generate Id and send it to your friend!
      </Text>
      <TouchableOpacity activeOpacity={.75} onPress={() => navigation.navigate('Menu')}>
      <View style={styles.itemStyle}>
        <Text style={styles.text}>
         Open next page
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainPageContainer: {
    marginTop: '10%',
    height: '100%',
    alignItems: 'center',
    width: '100%',
  },
  headerStyle: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
  },
  mainImage: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
    height: '50%',
  },
  basicText: {
    fontSize: 14,
    paddingTop: 50,
    width: '70%',
    textAlign: 'center',
  },
  itemStyle: {
    fontSize: 24,
    color: '#000000',
    padding: 16,
    margin: 16,
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
  }
});

export default Home;
