import { Component, OnInit } from '@angular/core';
import { EditActorModelDTO } from '../actor-model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actor',
  templateUrl: './index-actor.component.html',
  styleUrls: ['./index-actor.component.css']
})
export class IndexActorComponent implements OnInit {

  constructor(private actorServices: ActorsService) { }

  columnsToDisplay=["name","picture",'actions'];
  actors: EditActorModelDTO[];
  ngOnInit(): void {
   
    this.loadAddActors();

    console.log(this.actors);
  }

  loadAddActors()
  {
    this.actorServices.getAllActors().subscribe((data: EditActorModelDTO[])=>{
      this.actors= data;
      console.log(data)
    });
  }



  loadAddActors1()
  {
    this.actorServices.getAllActors().subscribe(data=>{
      this.actors= data;
      console.log(data)
    });
  }


  DeleteGenresById(id: number)
  {
    this.actorServices.deleteActorById(id).subscribe(()=>{
      this.loadAddActors();
    });
  }

}
