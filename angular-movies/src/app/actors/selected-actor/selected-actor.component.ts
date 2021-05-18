import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-selected-actor',
  templateUrl: './selected-actor.component.html',
  styleUrls: ['./selected-actor.component.css']
})


export class SelectedActorComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();


  @ViewChild(MatTable) table: MatTable<any>;
  columnsToDisplay=['picture','name','Characotr','actions'];

  actors=[
    {name:"Robert De Niro", picture:"https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY209_CR9,0,140,209_AL_.jpg"},
    {name:"Jack Nicholson", picture:"https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY209_CR5,0,140,209_AL_.jpg"},
    {name:"Marlon Brando", picture:"https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY209_CR65,0,140,209_AL_.jpg"},
  ]

  originalActors= this.actors;
  selectedActor=[];
  ngOnInit(): void {

    this.control.valueChanges.subscribe(value=>{
      this.actors = this.originalActors;
      this.actors= this.actors.filter(actor=> actor.name.indexOf(value)!== -1)


      if(this.table!== undefined)
      {
        this.table.renderRows();
      }
    })

  }


  onSelectedOption(event: MatAutocompleteSelectedEvent)
  {
    console.log(event.option.value);
   var count=0;
    for (let index = 0; index < this.selectedActor.length; index++) {
        if(this.selectedActor[index] == event.option.value)
        {
            count= count+1;
        }
    }

    if(count==0)
    { console.log("value Not Exist");
    this.selectedActor.push(event.option.value);
    this.control.patchValue('');
      
    }
    else
    {
      console.log("value Exist");
      this.control.patchValue('');
    }
   
  }


  remove(actor)
  {
    const index = this.selectedActor.findIndex(s=>s.name == actor.name);

    console.log(index);

    this.selectedActor.splice(index,1);
    this.table.renderRows();
  }


  droped(event: CdkDragDrop<any[]>)
  {
    const previousIndex= this.selectedActor.findIndex(actor=> actor === event.item.data);

    moveItemInArray(this.selectedActor,previousIndex, event.currentIndex);

    this.table.renderRows();
  }
}
