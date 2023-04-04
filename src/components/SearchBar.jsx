import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id,setID] = useState('')


   const handleChange = (event) => {
      setID(event.target.value)
   }

   const handleSearch = () => {
      onSearch(id);
      setID('')
   };

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}
