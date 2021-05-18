import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input() rating=5;
  

  @Input() selectedRate=0;

  @Output() onRating: EventEmitter<number> = new EventEmitter<number>();


  maxratingArry =[];

  previousRate=0;

  ngOnInit(): void {

    this.maxratingArry= Array(this.rating).fill(0);
  }

  handleMouseEnter(index: number)
  {
      this.selectedRate = index +1;
  }

  handleMouseLeave()
  {
    if(this.previousRate!==0)
    {
      this.selectedRate = this.previousRate;
    }
    else
    {
      this.selectedRate=0;
    }    
  }

    
  rate(index: number)
  {
    this.selectedRate = index+1;
    this.previousRate= this.selectedRate;

    this.onRating.emit(this.selectedRate);
  }
}
