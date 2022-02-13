import React, {useCallback, useState} from 'react';
import { CharacterDetails, Characters } from '../common/character/character.interface';
// components 
import CharacterGrid from './character-grid/character-grid.component';
import {useGetCharacters} from '../hooks/characters/queries/useGetCharacterQuery';
const CharactersComponent: React.FC = () => 
{
    const [currentPage, setPage] = useState(1);
    const [characterName, setCharacterName] = useState("Morty");
    const CHARACTER_QUERY = useGetCharacters({name:characterName,page:currentPage});
    let state:any; 
    const nextPageCallBack = useCallback(()=>{
        let page = currentPage; 
        setPage(page++);
    }, []);
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