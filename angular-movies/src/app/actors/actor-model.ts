export interface ActorModelDTO
{
    name: string,
    deteOfBirth: Date,
    picture:File,
    biography: string,
}

export interface EditActorModelDTO
{
    name: string,
    deteOfBirth: Date,
    picture:string,
    biography: string,
}