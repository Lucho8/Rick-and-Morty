import './App.css';
import Form from './components/Form.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
import Errors from './components/Error';
import Favorites from './components/Favorites';
import { useState,useEffect } from 'react';
import { Route,Routes,useLocation,useNavigate } from 'react-router-dom';
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [characters,setCharacters] = useState([])
   const [access,setAccess] = useState(false)

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
      }

   }

   useEffect(() => {
      !access && navigate('/')
   },[access,navigate])

   const onSearch = async (id) => {
      try {
         const characterFound = characters.find(character => character.id == id)

         if(characterFound) throw Error('Ese personaje ya esta agregado en la lista!')


         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         if(error.message.includes('ya esta agregado en la lista')) alert(error.message)
         else alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      const updatedCharacters = characters.filter((character) => character.id != id);
      setCharacters(updatedCharacters);
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
         }
         
      <Routes>
         <Route path='/' element={<Form login={login}/>}></Route>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/detail/:id' element={<Detail/>}></Route>
         <Route path='/favorites' element={<Favorites/>} />
         <Route path=':Error' element={<Errors/>}></Route>
      </Routes>
      </div>
   );
}

export default App;
