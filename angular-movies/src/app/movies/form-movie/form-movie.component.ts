import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selec.model';
import { movieCreateDTO, movieDTO } from '../movie.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() model: movieDTO;


  nonselectedGenras: multipleSelectorModel[]=[
    {key:1, value:"Movie11"},
    {key:2, value:"Movie 2"},
    {key:3, value:"Movie 3"}
  ]

  selectedGenras: multipleSelectorModel[]=[];


  selectedTheater: multipleSelectorModel[]=[
    {key:1, value:"Theater 1"},
    {key:2, value:"Theater 2"},
    {key:3, value:"Theater  3"}
  ]

  nonselectedTheater: multipleSelectorModel[]=[];




  @Output() onSaveChanges =new EventEmitter<movieCreateDTO>();
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      title:['',{
        validators:[Validators.required]
      }],
      summary:'',
      inTheater: false,
      trailer:'',
      releaseDate:'',
      poster:'',
      genrasId:'',
      movieTheaterId:''
    })
      if(this.model!= null)
      {
        this.form.patchValue(this.model);
      }
  }

  onImageSelected(file: File)
  {
    this.form.get('poster').setValue(file);
  }

  changeMarkDown(content: string)
  {
    this.form.get('summary').setValue(content);
  }
  saveChanges()
  {
    const genresIds= this.nonselectedGenras.map(value=> value.key);
    this.form.get('genrasId').setValue(genresIds);

    const movieThearerid=this.selectedTheater.map(value=> value.key);
    this.form.get("movieTheaterId").setValue(movieThearerid);

    
      this.onSaveChanges.emit(this.form.value);
  }
}
