import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';


function App() {
   const [characters,setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const updatedCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(updatedCharacters);
   }

   return (
      <div>
         <Nav onSearch={onSearch}/>
      <Routes>
         <Route path='/' element={<Cards characters={characters} onClose={onClose}/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/detail/:id' element={<Detail/>}></Route>
         <Route path=':Error' element={<Error/>}></Route>
      </Routes>
      </div>
   );
}

export default App;
