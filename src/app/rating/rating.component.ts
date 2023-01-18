import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  st:any;
  constructor() { }

  ngOnInit(): void {


  }
  rating=new FormControl(0)
  getRate(){
    let a:any=this.rating.value;
    if(a==1){
      this.st="Very Bad"
    }else if(a==2){
      this.st="Bad"
    }
    else if(a==3){
      this.st="Good"
    }
    else if(a==4){
      this.st="Excelent"
    }
    else{
      this.st="Outstanding"
    }
    alert('Status of Rating is '+this.st)
  }

}
