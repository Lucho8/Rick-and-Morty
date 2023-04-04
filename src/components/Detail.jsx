import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});


    useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert("No hay personajes con ese ID");
        }
        }
    );
    return setCharacter({});
    }, [id]);

    const {name,status,species,gender,origin,image} = character;
    
    return (
        <div>
            <h2>{name}</h2>
            <h4>{status}</h4>
            <h4>{species}</h4>
            <h4>{gender}</h4>
            <h4>{origin?.name}</h4>
            <img src={image} alt="" />
        </div>
    );
};

export default Detail;
