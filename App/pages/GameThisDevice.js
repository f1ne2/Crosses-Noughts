import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PlayingField from '../Components/PlayingField';
import {sendDataRequest, getState} from '../functions/api';
import UpdateState from '../Components/UpdateState';

const Game = (props) => {
  console.log(props);
  const initialState = [
    {value: '', key: 0, id: props.route.params.text, count: 0},
    {value: '', key: 1, id: props.route.params.text, count: 0},
    {value: '', key: 2, id: props.route.params.text, count: 0},
    {value: '', key: 3, id: props.route.params.text, count: 0},
    {value: '', key: 4, id: props.route.params.text, count: 0},
    {value: '', key: 5, id: props.route.params.text, count: 0},
    {value: '', key: 6, id: props.route.params.text, count: 0},
    {value: '', key: 7, id: props.route.params.text, count: 0},
    {value: '', key: 8, id: props.route.params.text, count: 0},
  ];
  
  const [loading, setLoading] = useState(false);
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
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getState(listOfItems);
      setListOfItems(response);
      setCount(response[0].count);
      setLoading(true);
    };
    fetchData();
  }, [loading]);
  
  
  const isWinner = () => {
    let win = false;
    winnerLines.forEach((item) => {
      if (listOfItems[item[0]].value === 'X' && listOfItems[item[1]].value === 'X' && listOfItems[item[2]].value === 'X' ||
        listOfItems[item[0]].value === 'O' && listOfItems[item[1]].value === 'O' && listOfItems[item[2]].value === 'O') {
        alert('You won!!!')
        win = true;
        setTimeout(() => {
            sendDataRequest(initialState)
              .then((data) => {
                setListOfItems(initialState)
              });
        }, 1000);
      }
    })
    let counter = 0;
    listOfItems.forEach((item) => {
      if (item.value)
        counter += 1
    })
    if (counter === listOfItems.length && !win) {
      alert("It's draw!")
        setTimeout(() => {
          sendDataRequest(initialState)
            .then((data) => {
              setListOfItems(initialState)
            });
        }, 1000);
    win = false;
  }}
  
  const addElementToField = (item) => {
    const newState = listOfItems;
    
    if (!item.value) {
      newState[item.key].value = (count % 2 === 0) ? 'X' : 'O';
      newState[0].count = count + 1
      setCount(count + 1);
      sendDataRequest(newState)
        .then((data) => {
          setListOfItems(data)
          setLoading(true);
        });
    } else {
      alert('You can not do that! Try again');
    }
    
    isWinner()
  };
  
  if (!loading)
    return null;
  console.log(props.route.params.text.slice(props.route.params.text.length-6));
  return (
    <SafeAreaView style={stylesHere.sectionContainer}>
      <Text style={stylesHere.headerText}>Let's play</Text>
      <View style={stylesHere.wrappedStyle}>
        <View style={stylesHere.sectionField}>
          {listOfItems.map(item => (
            <PlayingField
              key={item.key}
              element={item}
              addElementToField={addElementToField}
            />
          ))}
        </View>
      </View>
      {props.route.params.text.slice(props.route.params.text.length-6) !== 'single'
        ? <UpdateState navigation={props.navigation} id={initialState[0].id} loading={loading} setLoading={setLoading} />
        : null}
    </SafeAreaView>
  );
};

export const stylesHere = StyleSheet.create({
  sectionContainer: {
    marginTop: '10%',
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
  headerText: {
    fontSize: 24,
    color: '#000000',
    padding: 16,
  }
});

export default Game;
