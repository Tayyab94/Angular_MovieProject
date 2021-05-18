import { Component, OnInit } from '@angular/core';
import { movieCreateDTO } from '../movie.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  SaveChanges(MovieForm: movieCreateDTO)
  {
    console.log(MovieForm);
  }
}
