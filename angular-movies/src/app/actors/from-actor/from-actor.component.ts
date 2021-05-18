import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorModelDTO } from '../actor-model';

@Component({
  selector: 'app-from-actor',
  templateUrl: './from-actor.component.html',
  styleUrls: ['./from-actor.component.css']
})
export class FromActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input() model: ActorModelDTO;

  @Output() onSaveChanges = new EventEmitter<ActorModelDTO>();

  form: FormGroup;

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name:['',{
        validators:[Validators.required]
      }],
      deteOfBirth:'',
      picture:'',
      biography:''
    });


    if(this.model!= undefined)
    {
      this.form.patchValue(this.model);
    }
  }

  selectedImage(image: File)
  {
    this.form.get('picture').setValue(image);
  }

  changeMarkdown(content: string)
  {
    this.form.get('biography').setValue(content);
  }

  saveChanges()
  {
    this.onSaveChanges.emit(this.form.value);
  }

}
