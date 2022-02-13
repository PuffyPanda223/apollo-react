import React from 'react';

// components 
import CharacterGrid from './character-grid/character-grid.component';
import {Characters, CharacterDetails} from '../common/character/character.interface';
const CharactersComponent: React.FC = () => 
{
    const CHARACTER_DETAILS : Characters = {
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
                episodes: [
                    {name:"All things are going to die", id:1},
                    {name:"lkasndlksadmlksdmnlksamndas", id:2},
                    {name:"teehee weehee sjkdnjksdnsa",id:3}
                ]
            },
        ]
    } ;
    // put logic to query graphql here
    return (
        <div className = "Home" >
            <CharacterGrid results={CHARACTER_DETAILS.results} info = {CHARACTER_DETAILS.info} />
        </div>
    );
}

export default CharactersComponent;