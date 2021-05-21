import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormatDateFromData } from '../utilities/utils';
import { ActorModelDTO, EditActorModelDTO } from './actor-model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private apiUrl= environment.apiUrl + "/actors";
  constructor(private http: HttpClient) { }


  getAllActors():Observable<EditActorModelDTO[]>
  {
    return this.http.get<EditActorModelDTO[]>(this.apiUrl);
  }


  deleteActorById(id: number)
  {
    console.log(id);
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  createActorFunction(actor: ActorModelDTO)
  {
    const formData= this.buildForm(actor);

    return this.http.post(this.apiUrl,formData);
  }


  private buildForm(actor: ActorModelDTO): FormData{
    const formData= new FormData();

    formData.append('name', actor.name);
    if(actor.biography)
    {
      formData.append('biography', actor.biography);
    }


    if(actor.deteOfBirth)
    {
      formData.append('deteOfBirth',FormatDateFromData(actor.deteOfBirth));
    }


    if(actor.picture)
    {
      formData.append('picture',actor.picture);
    }

    return formData;
  }
}
