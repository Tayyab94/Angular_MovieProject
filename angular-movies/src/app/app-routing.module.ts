import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateMovieTheaterComponent } from './movie-theater/create-movie-theater/create-movie-theater.component';
import { EditMovieTheaterComponent } from './movie-theater/edit-movie-theater/edit-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theater/index-movie-theater/index-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  {
    path:'', component: HomePageComponent
  },
  {
    path:'genres', component: IndexGenresComponent
  },
  {
    path:'genres/create', component: CreateGenreComponent
  },
  {
    path:'genres/edit/:id', component: EditGenreComponent
  },
  

  {
    path:'movietheater', component: IndexMovieTheaterComponent
  },
  {
    path:'movietheater/create', component: CreateMovieTheaterComponent
  },
  {
    path:'movietheater/edit/:id', component: EditMovieTheaterComponent
  },


  {
    path:'actors', component: IndexActorComponent
  },
  {
    path:'actors/create', component: CreateActorComponent
  },
  {
    path:'actors/edit/:id', component: EditActorComponent
  },



  {
    path:'movies/create', component: CreateMovieComponent
  },
  {
    path:'movies/edit/:id', component: EditMovieComponent
  },

  {
    path:'movies/filter', component: MovieFilterComponent
  },


  // Wild-Card- Route
  {
    path:"**", redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
