import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr:any=[]
  constructor(private ser:ServiceService) { }

  ngOnInit(): void {
    this.arr=this.ser.pobj;
  }

}
