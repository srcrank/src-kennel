import React, { useState, useEffect } from "react";
import { getAllAnimals, getAnimalById } from "../../modules/AnimalManager"
import { AnimalCard } from "./AnimalCard"

export const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            //we'll do something more interesting with this data soon.
            console.log(animalsFromAPI);
        })
    };

    useEffect(() => {
        getAnimals();
    }, []);
    
    
    
    return (
        <div className="container-cards">
           {animals.map(animal => <AnimalCard />)}
        </div>
     );     
};

