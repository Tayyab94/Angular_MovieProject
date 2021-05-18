import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  genres= [{id:1, name:"Action"},{id:2, name:'Comedy'}];


  movies=[
    {
      title: "Comedy Movie",
      releaseDate : new Date(),
      imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa74CnMZAbTrXL2a1X8GHrVbAq9-xV0ESFHA&usqp=CAU',

    },
    {
      title: "This Movies",
      releaseDate : new Date("2016-02-4"),
      imgPath:'https://www.imb.org/photos/wp-content/uploads/sites/5/2021/01/206800439-600x400.jpg',
    },
    {
      title: "Mixture Movie",
      releaseDate : new Date("2016-02-4"),
      imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpfnOc_yeoi_QF3PdDUiI1gFcfmlBmJS80nBO2uqwvyNtKdCRBdY_lTzN1v2_zzXBvPnE&usqp=CAU',
    }
  ]

  originalMovies = this.movies


  form: FormGroup;
  ngOnInit(): void {
    this.form= this.formBuilder.group({
      title:'',
      genraId:0,
      upcommingReleased: false,
      inTheaters:false,
    });


    this.form.valueChanges
      .subscribe(value=>{
        this.movies= this.originalMovies;
        
        this.filterMovie(value);
      })


  }


  filterMovie(values: any)
  {
    if(values.title)
    {
     /// this.movies = this.movies.filter(mov=> mov.title.indexOf(values.title) !== -1); 
   
     this.movies = this.movies.filter(mov=> mov.title.toLocaleLowerCase().indexOf(values.title.toLocaleLowerCase()) !== -1); 
    
    }
  }

  

  OnClear()
  {
      this.form.reset();
  }
}
