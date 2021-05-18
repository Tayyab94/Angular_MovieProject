import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorModelDTO, EditActorModelDTO } from '../actor-model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: EditActorModelDTO = {name:"Tayyab Bhatti", deteOfBirth: new Date(), picture:'', biography:"Default Value"}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      alert(params.id);
    })
  }




  SaveForm(actorModel: ActorModelDTO)
  {
    console.log(actorModel);
  }
}
