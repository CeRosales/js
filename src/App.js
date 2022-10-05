import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {




  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);
  const [newFriends, setNewFriends] = useState({
    quote: "",
    character: "",
  }
  );


  useEffect(() => {
    fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json")
    .then(response => response.json())
    .then(data => {
      setFriends(data);

  })

  }, []);

  

  const handleName = (ev) => {
    setName(ev.currentTarget.value);
  }

  const htmlFriends = friends.map(friendsItem => {
  return <li>{friendsItem.quote}{friendsItem.character}</li>
  });

  const handleNewFriends = (ev) => {
    setNewFriends({
      ...newFriends,
      [ev.target.id]: ev.target.value,
    })
  };

  const handleClick =(ev)=>{
    ev.preventDefault();
    console.log("HOOOLI");
    setFriends([
      ...friends,
      newFriends
    ])
  }



  return (
    <div className="App">
      <header className="App-header">
        <h2>Frases de Friends:</h2>
        <ul>{htmlFriends}</ul>
        <h2>Añadir una nueva frase</h2>
        <label>Frase</label>
        <input type="text" id="quote" value={newFriends.quote} onChange={handleNewFriends}></input>
        <label>Personaje</label>
        <input type="text" id="character" value={newFriends.character} onChange={handleNewFriends}></input>
        <button onClick={handleClick}>Añadir la nueva frase</button>


      </header>

    </div>
  );
}

export default App;
