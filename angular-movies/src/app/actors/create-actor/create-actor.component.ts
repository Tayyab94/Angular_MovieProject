import { Component, OnInit } from '@angular/core';
import { ActorModelDTO } from '../actor-model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor() { }

  errors: string[]=[];

  ngOnInit(): void {
  }


  SaveForm(actorModel: ActorModelDTO)
  {
    console.log(actorModel);
  }

}
