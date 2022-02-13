import React from 'react';
import { CharacterDetails, Characters } from '../common/character/character.interface';
// components 
import CharacterGrid from './character-grid/character-grid.component';
import {useGetCharacters} from '../hooks/characters/queries/useGetCharacterQuery';
const CharactersComponent: React.FC = () => 
{
    const CHARACTER_DETAILS : Characters= {
        info:{
            pages:1 ,
            count:1
        },
        results:[
            {
                id:1, 
                name:"Rick",
                status:"Alive", 
                gender:"Male", 
                species:"Human", 
                image:"https://p1.hiclipart.com/preview/840/454/420/rick-and-morty-hq-resource-green-alien-rick-and-morty-cartoon-character-art-png-clipart.jpg",
                episode: [
                    {name:"All things are going to die", id:1},
                    {name:"lkasndlksadmlksdmnlksamndas", id:2},
                    {name:"teehee weehee sjkdnjksdnsa",id:3}
                ]
            },
            {
                id:2, 
                name:"msadknad", 
                status: "Unknown", 
                gender:"Female", 
                species:"Egg" ,
                image:"https://p1.hiclipart.com/preview/840/454/420/rick-and-morty-hq-resource-green-alien-rick-and-morty-cartoon-character-art-png-clipart.jpg",
                episode : [
                    {name:"To live before death ", id:99}, 
                    {name : "Immortal Joe", id:12},
                ]
            }
        ]
    };

    const CHARACTER_QUERY = useGetCharacters({name:"Rick",page:1});
    let state:any; 
    if (CHARACTER_QUERY)
        state = <CharacterGrid results={CHARACTER_QUERY.results} info = {CHARACTER_QUERY.info} />;
    else 
        state = <div>loading</div>;
    // put logic to query graphql here
    return (
        <div className = "Home" >
            {state}
        </div>
    );
}

export default CharactersComponent;