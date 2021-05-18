
export function toBase64(file: File)
{
    return new Promise((resolve,reject)=>{
        const reader= new FileReader();
        reader.readAsDataURL(file);

        reader.onload =() => resolve(reader.result);
        reader.onerror=(error)=> reject(error);
    })
}


export function ParseWebAPIsErrors(response:any): string[]
{
    const result: string[]=[];
    
        if(response.error)
        {
            if(typeof response.error =='string')
            {
                result.push(response.error());
                
            }
            else
            {
                const mapError= response.error.errors;
                const entries= Object.entries(mapError);

                entries.forEach((arr: any[])=>{
                    const filed= arr[0];
                    arr[1].forEach(errorMessage=>{
                        result.push(`${filed}: ${errorMessage}`);
                    })
                })
            }
        }
    
    return result;
}