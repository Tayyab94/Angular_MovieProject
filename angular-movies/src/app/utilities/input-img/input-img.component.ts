import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  @Input() currentImageSelected: string;
  
  @Output() onImageSelected= new  EventEmitter<File>();
  imageBase64: string;

  ngOnInit(): void {
  }

  change(event)
  {
  
    if(event.target.files.length >0)
    {
      const file: File= event.target.files[0];
      toBase64(file).then((value: string) => {
        this.imageBase64= value;
      });

      this.onImageSelected.emit(file);
      this.currentImageSelected= null;
    }
  }
}
