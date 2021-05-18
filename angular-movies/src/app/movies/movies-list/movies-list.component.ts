import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

   constructor() { }
  
  developerName: string ="Tayyab";
  
  @Input() movies;

  ngOnInit(): void {

  }

  removeMovie(ind: number)
  {
   this.RemoveElementFromArray(ind);
  }

   RemoveElementFromArray(element: number) {
    this.movies.forEach((value,index)=>{
        if(value==element) this.movies.splice(index,1);
    });
}
}

