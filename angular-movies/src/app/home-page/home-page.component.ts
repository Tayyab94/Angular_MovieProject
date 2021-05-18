import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
 
  title = 'angular-movies';

  // movies;

  moviesInThethor;

  moviesInFutureReleaase;

  ngOnInit(): void {

    setTimeout(() => {
      this.moviesInFutureReleaase =[
        {
        title: "This is tile Movies in Future",
        releaseDate : new Date(),
        imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa74CnMZAbTrXL2a1X8GHrVbAq9-xV0ESFHA&usqp=CAU',

      },
      {
        title: "This is second title Future",
        releaseDate : new Date("2016-02-4"),
        imgPath:'https://www.imb.org/photos/wp-content/uploads/sites/5/2021/01/206800439-600x400.jpg',
      },
      {
        title: "This is Thirst title Future",
        releaseDate : new Date("2016-02-4"),
        imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpfnOc_yeoi_QF3PdDUiI1gFcfmlBmJS80nBO2uqwvyNtKdCRBdY_lTzN1v2_zzXBvPnE&usqp=CAU',
      }

      ];
    
      
    }, 1000);
  }
 

}
