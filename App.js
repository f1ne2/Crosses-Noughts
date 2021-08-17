import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import PlayingField from './PlayingField';

const App: () => Node = () => {
  const initialState = [
    {value: '', key: 0},
    {value: '', key: 1},
    {value: '', key: 2},
    {value: '', key: 3},
    {value: '', key: 4},
    {value: '', key: 5},
    {value: '', key: 6},
    {value: '', key: 7},
    {value: '', key: 8},
  ]
  const [listOfItems, setListOfItems] = useState(initialState);
  const [count, setCount] = useState(0);
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  const isWinner = () => {
    winnerLines.forEach((item) => {
      if (listOfItems[item[0]].value === 'X' && listOfItems[item[1]].value === 'X' && listOfItems[item[2]].value === 'X' ||
        listOfItems[item[0]].value === 'O' && listOfItems[item[1]].value === 'O' && listOfItems[item[2]].value === 'O') {
        alert('You won!!!')
        setTimeout(() => {
          setListOfItems(() => {return initialState})
        }, 2000)
      }
    })
    let counter = 0;
    listOfItems.forEach((item, index) => {
      if (item.value)
        counter += 1
    })
    if (counter === listOfItems.length) {
      alert("It's draw!")
      setTimeout(() => {
        setListOfItems(() => {
          return initialState
        })
      }, 2000)
    }
  }
  
  const addElementToField = (item) => {
    const newState = listOfItems;
    if (!item.value) {
      newState[item.key].value = (count % 2 === 0) ? 'X' : 'O';
      setCount(count + 1);
      setListOfItems(() => {
        return newState
      });
    } else {
      alert('You can not do that! Try again');
    }
    isWinner()
  };
  
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.wrappedStyle}>
        <View style={styles.sectionField}>
          {listOfItems.map(item => (
            <PlayingField
              key={item.key}
              element={item}
              addElementToField={addElementToField}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: '25%',
    alignItems: 'center',
    width: '100%',
  },
  wrappedStyle: {
    width: 244,
    borderWidth: 2,
    height: 244,
  },
  sectionField: {
    flexWrap: 'wrap',
  },
  element: {
    height: 80,
    width: 80,
    fontSize: 54,
    textAlign: 'center',
    borderWidth: 1,
  },
});

export default App;
