import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../movie-theader.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheaterDTO={name:"this is default", long:-111.75292968750001,lati:41.21172151054787};
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
  
    })

  }

  SaveChanges(theaterMovie: movieTheaterCreationDTO)
  {
    console.log(theaterMovie);
  }

}
