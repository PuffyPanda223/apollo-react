import {CharacterDetails} from '../../common/character/character.interface';

const CharacterCell:React.FC<{char:CharacterDetails}> = ({char}:{char:CharacterDetails}) =>{
    console.log(char);
    console.log("hello there");
    return(
        <div>
            jhasbdkjasdbn

        </div>
    );
}

export default CharacterCell;