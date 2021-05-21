import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorModelDTO } from '../actor-model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor(private actorServices: ActorsService, private router: Router) { }

  errors: string[]=[];

  ngOnInit(): void {
  }


  SaveForm(actorModel: ActorModelDTO)
  {
    console.log(actorModel);

    this.actorServices.createActorFunction(actorModel).subscribe(()=>{
      this.router.navigate(["/actors"]);
    })
  }

}
