import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
arr:any=[]
  constructor(private ser:ServiceService,
    private s1:ActivatedRoute) { }

  ngOnInit(): void {
    this.s1.paramMap.subscribe((params:any)=>{
      let id=params.get('id')
      this.arr=this.ser.pobj.filter((res:any)=>res.id==id)
    })
  }

}
