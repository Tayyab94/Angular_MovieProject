import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstlatterUppercase } from 'src/app/Validators/firstLetterUppercase';
import { GenresModelDTO } from '../genres.model';

@Component({
  selector: 'app-form-genres',
  templateUrl: './form-genres.component.html',
  styleUrls: ['./form-genres.component.css']
})

export class FormGenresComponent implements OnInit {

  
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  @Input()
     model: GenresModelDTO;
  
  @Output() onSaveChanges: EventEmitter<GenresModelDTO> = new EventEmitter<GenresModelDTO>();
  


  form: FormGroup;
  ngOnInit(): void {
    
    this.form= this.formBuilder.group({
      name:['',{
        validators:[Validators.required, Validators.minLength(3), firstlatterUppercase()]
      }]
    });


    if(this.model !=undefined)
    {
      this.form.patchValue(this.model);
    }
  }

  saveChanges()
  {
      this.onSaveChanges.emit(this.form.value);
  }

  
  getErrorMessageFieldName()
  {
    const filed=this.form.get('name');

    if(filed.hasError('required'))
    {
      return 'This name field is requried';
    }

    if(filed.hasError('minlength'))
    {
      return 'Min charactors should greater than 3'
    }

    if(filed.hasError('firstlatterUppercase'))
    {
      return filed.getError('firstlatterUppercase').message;
    }
    

    return '';
  }
}
