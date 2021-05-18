import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selec.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }


  @Input() selector: multipleSelectorModel[]=[];

  
  @Input() nonSelector: multipleSelectorModel[]=[];

  ngOnInit(): void {
  }


  select(item: multipleSelectorModel, index: number)
  {
    this.selector.push(item);
    this.nonSelector.splice(index,1);
  }


  
  deSelect(item: multipleSelectorModel, index: number)
  {
    this.nonSelector.push(item);
    this.selector.splice(index,1);
  }
  selectAll()
  {
    this.selector.push(...this.nonSelector);
    this.nonSelector=[];
  }

  deSelectAll()
  {
    // this.nonSelector.push(...this.selector);
    // this.selector=[];

     for (let index = 0; index < this.selector.length; index++) {
        
          this.nonSelector.push({key:this.selector[index].key, value: this.selector[index].value});
     }

     this.selector=[];
  }
}
