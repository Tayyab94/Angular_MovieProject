import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreateDTO, movieDTO } from '../movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO ={title:'Edit Movie',inTheater: true,releaseDate: new Date(),summary:'This is summary', 
  trailer:"asdasd" ,genrasId:3,poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa74CnMZAbTrXL2a1X8GHrVbAq9-xV0ESFHA&usqp=CAU"}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
  
    })

  }

  SaveChanges(MovieForm: movieCreateDTO)
  {
    console.log(MovieForm);
  }
}
