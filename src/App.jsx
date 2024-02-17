import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  // const [users, setUsers] = useState([])
  const [menus, setMenus] = useState([]);

  // const getUserData = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setUsers(res.data))
  //     .catch(err => console.log(err));
  // }

  const getMenu = () => {
    axios
    .get('https://api.mudoapi.tech/menus')
    .then(res => setMenus(res.data.data.Data))
    .catch(err => {
      console.log(err);
    })

  }

  useEffect(() => {
    getMenu();
  },[])

  console.log('data',menus);

  // useEffect(() => { 
  //   getUserData();
  //  }, []);

  //  console.log('data', users);

  return (
    <>
      <h1>hello world</h1>

      {menus.map((items, index) => (
        <div key={index}>
          <h1>{items.name}</h1>
          <img style={{width: '200px'}} src={items.imageUrl} />
          <p>{items.description}</p>
        </div>
      ))}

      {/* {menus.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <img src={item.imageUrl} />
          <p>{item.description}</p>
        </div>
      ))} */}
    </>
  )
}

export default App;
