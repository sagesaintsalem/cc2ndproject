import { useState, useEffect } from "react";
import styled from 'styled-components';

const HeartButton = styled.button`
background-color: transparent;
border:none;

`

const CatElement = ({cat, handleAdoptMeClick}) => {
    const [favourites, setFavourites] = useState([])
    
    useEffect(()=> {
        handleFavourites();
    },[])

    const handleFavourites = (event) => {
        console.log('Favourited!')
    }



    if (cat.adopted) {
        return null
    }
    
    return (
        <div>
            <img src={cat.image} alt="no image"/>
            <h4>{cat.name}</h4>
            <p>{cat.breed}</p>
            <p>{cat.age}</p>
            <p>{cat.about}</p>
            <HeartButton onClick={handleFavourites}><span>❤️</span></HeartButton>
            <button onClick={handleAdoptMeClick}>Adopt me!</button>
        </div>
    )
}

export default CatElement;