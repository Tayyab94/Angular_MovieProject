import { AbstractControl, Validators } from "@angular/forms";

export function firstlatterUppercase(): Validators
{
    return (control: AbstractControl) => {
        const value = <string>control.value;

        if(!value) return;

        if(value.length==0) return;

        const firstLetter = value[0];

        if(firstLetter!= firstLetter.toUpperCase())
        {
            return {
                firstlatterUppercase: {
                    message: 'The First Letter must be upperCase'
                }
            }
        }
    }
}