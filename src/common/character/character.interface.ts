export interface Episode 
{
    id:number
    name:string
}

export interface CharacterDetails 
{
    id:number
    name:string 
    status:string 
    image?:string
    // ? means its optional
    episodes?:Array<Episode>
    gender:string
    species:string 
};

export interface Info 
{
    count:number
    pages:number
}

// a character query comes with an info object and a results object which is an array
export interface Characters {
    info:Info
    results:Array<CharacterDetails>
};