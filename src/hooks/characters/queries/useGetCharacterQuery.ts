import {gql, useQuery} from "@apollo/client";

import {Characters} from '../../../common/character/character.interface';
export interface CharacterQuery {
    name?:string
    page?:number
}
const GET_CHARACTERS = gql`
    query GetCharacters($name:String!, $page:Int!){
        characters(page:$page, filter:{name:$name}){
            info{
                pages
                count 
            }
            results{
                id
                name 
                status 
                episode {
                    id
                    name
                }
                gender
                species
            }
        }
    }
`;

export const useGetCharacters = (query:CharacterQuery = {name:"", page:1}): Characters | undefined =>{
    const { data } = useQuery(GET_CHARACTERS, {
        variables : {
            name:query.name,
            page: query.page
        }
    });
    return data?.characters;  // returns the results object and info object
}