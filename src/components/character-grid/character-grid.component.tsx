//import CharacterCell from './character-cell.component';
import {Characters, CharacterDetails} from '../../common/character/character.interface';

const CharacterCellDisplay: React.FC<{char:CharacterDetails}> = ({char}:{char:CharacterDetails}) =>
{
    return(
        <div style={{margin:'12px'}}>
           <p>name : {char.name} </p>
           <p>species : {char.species}</p>
           <p>gender : {char.gender}</p>
           <p>status : {char.status}</p>
           {char.episode &&
            <div>
                <p>List of episodes {char.name} appears in</p>
                <ul>
                    {char.episode.map(ep=>{
                        return (
                            <li key = {ep.id}>
                                {ep.name}
                            </li>        
                        )
                    })}
                </ul>
            </div>
           }
           {char.image && 
            <img src = {char.image} />
           }
        </div>
    );
};

const CharacterGrid : React.FC<Characters> = ({results, info}:Characters, nextPage:any) =>
{
    const btn = () => {
        console.log("button clicked");
        console.log(info.next);
    }
    return(
        <div className='character-grid'>
            <div>
                <p>total pages: {info.pages}</p>
                <p>total amount of enteries with the query : {info.count}</p>
                {info.next &&
                    
                    <button onClick={btn}> Next Page</button>
                }
            </div>
            {results.map((item)=>{
                return <div key = {item.id}> 
                     <CharacterCellDisplay char={item} />
                </div>
            })}
        </div>
    );
}

export default CharacterGrid;