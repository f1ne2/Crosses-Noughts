export async function sendDataRequest(newState) {
  return fetch('http://192.168.100.104:3000/game', {
    // return fetch('https://aqueous-badlands-20380.herokuapp.com/game', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newState)
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function sendIdRequest(newState) {
  // return fetch('https://aqueous-badlands-20380.herokuapp.com/generateId', {
  return fetch('http://192.168.100.104:3000/generateId', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newState)
  })
    .then((res) => {
      return res.json();
    });
}

export async function getState(newState) {
  return fetch('http://192.168.100.104:3000/state', {
    // return fetch('https://aqueous-badlands-20380.herokuapp.com/state', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newState)
  })
    .then((res) => {
      return res.json();
    });
}
