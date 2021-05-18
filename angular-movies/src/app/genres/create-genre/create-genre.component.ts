import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParseWebAPIsErrors } from 'src/app/utilities/utils';
import { firstlatterUppercase } from 'src/app/Validators/firstLetterUppercase';
import { GenresModelDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  errors: string[]= [];
  constructor(private router: Router, private genresServices: GenresService) { }
 ngOnInit(): void {
 
  }

  saveChanges(genresDTO: GenresModelDTO)
  {
    this.genresServices.CreateGenres(genresDTO).subscribe( ()=> {    
        this.router.navigate(['/genres']);
    }, error=> this.errors =ParseWebAPIsErrors(error));

   
  }


}
