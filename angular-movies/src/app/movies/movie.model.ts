export interface movieCreateDTO{
    title: string,
    summary: string,
    inTheater: boolean,
    trailer: string,
    releaseDate:Date,
    poster:File,
    genrasId: number,
    theaterId: number[],
}


export interface movieDTO{
    title: string,
    summary: string,
    inTheater: boolean,
    trailer:string,
    releaseDate:Date,
    poster:string,
    genrasId: number,
}