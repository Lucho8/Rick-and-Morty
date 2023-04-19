import './App.css';
import Form from './components/Form.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Favorites from './components/Favorites';
import { useState,useEffect } from 'react';
import { Route,Routes,useLocation,useNavigate } from 'react-router-dom';




const email = 'luchito@gmail.com'
const password = '123asd'

function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [characters,setCharacters] = useState([])
   const [access,setAccess] = useState(false)

   const login = (userData) =>{
      if (userData.email === email && userData.password === password){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/')
   },[access,navigate])

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
         <Route path=':Error' element={<Error/>}></Route>
      </Routes>
      </div>
   );
}

export default App;
