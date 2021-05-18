import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenresDTO, GenresModelDTO } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  private apiUrl= environment.apiUrl +"/genres";

  GetGenresByID(id: number):Observable<GenresDTO>
  {
    return this.http.get<GenresDTO>(`${this.apiUrl}/${id}`);
  }



  getAll():Observable<GenresDTO[]>
  {
    return this.http.get<GenresDTO[]>(this.apiUrl);
  }


  CreateGenres(genres: GenresModelDTO)
  {
    return this.http.post(this.apiUrl,genres);
  }


  EditGenres(id: number, genres: GenresDTO)
  {
    console.log(id);
    return this.http.put(`${this.apiUrl}/${id}`,genres);
  }

  DeleteGenres(id: number)
  {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


