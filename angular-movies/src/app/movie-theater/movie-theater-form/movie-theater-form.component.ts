import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoordinateMap } from 'src/app/utilities/map/cordinate';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../movie-theader.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() model: movieTheaterDTO;

  initialCoordinates: CoordinateMap[]= [];

  @Output() onSaveChanger= new EventEmitter<movieTheaterCreationDTO>();
  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name:['',[Validators.required]],
      long:['',{
        Validators:[Validators.required]
      }],
      lati:['',{
        Validators:[Validators.required]
      }]
    });

    if(this.model!= null)
    {
      this.form.patchValue(this.model);

      this.initialCoordinates.push({lati:this.model.lati, long: this.model.long});
    }

  }

  onSelectedMapLocation(cordinate: CoordinateMap)
  {
    this.form.patchValue(cordinate);
  }

  SaveChanges()
  {
    this.onSaveChanger.emit(this.form.value);
  }

}
