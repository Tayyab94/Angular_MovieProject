import { Component, OnInit } from '@angular/core';
import { movieTheaterCreationDTO } from '../movie-theader.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  SaveChanges(theaterMovie: movieTheaterCreationDTO)
  {
    console.log(theaterMovie);
  }
}
