import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenresDTO, GenresModelDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private genresServices: GenresService,
    private router: Router) { }


  model:GenresDTO;
 id: number;
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
        this.genresServices.GetGenresByID(params.id).subscribe(gen=>{
          this.model= gen;
          this.id= gen.id;
        })
    })

  }


  saveChanges(genres: GenresDTO)
  {     
    this.genresServices.EditGenres(this.id, genres).subscribe(()=>{

      this.router.navigate(["/genres"]);
    })
  }
 
}
