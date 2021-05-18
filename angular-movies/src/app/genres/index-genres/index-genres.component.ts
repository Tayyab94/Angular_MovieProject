import { Component, OnInit } from '@angular/core';
import { GenresDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {

  constructor(private genService: GenresService) { }

  genres: GenresDTO[];

  columnsToDisplay=["name",'actions'];
  ngOnInit(): void {

    this.loadGenres();
    
  }

  loadGenres(){
    this.genService.getAll().subscribe(genres=>{
        
      this.genres= genres;
    });
  }
  DeleteGenresById(id: number)
  {
    console.log(id);
      this.genService.DeleteGenres(id).subscribe(()=>{
        this.loadGenres();
      })
  }
}
