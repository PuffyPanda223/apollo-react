export interface Episode 
{
    id:number
    name:string
};

export interface CharacterDetails 
{
    id:number
    name:string 
    status:string 
    image?:string
    // ? means its optional
    episode?:Array<Episode>
    gender:string
    species:string 
};

export interface Info 
{
    count:number
    pages:number
    next?:string 
    previous?:string
};

export interface Characters {
    info:Info
    results:Array<CharacterDetails>
};