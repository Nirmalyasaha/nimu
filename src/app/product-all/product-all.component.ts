import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {
arr:any=[]
arr1:number[]=[2000,3000,4000]
p!:any;
arr2:any=[]
id!:any;
pid!:any;
searchT!:string
  constructor(private ser:ServiceService,
    private s1:ActivatedRoute) { }

  ngOnInit(): void {
    this.s1.paramMap.subscribe((params:any)=>{
      this.id=params.get('id')
      this.arr=this.ser.pobj.filter((res:any)=>res.id==this.id)
      //console.log(this.arr);
      
      this.pid=params.get('pid')
      this.arr=this.arr[0].product.filter((res:any)=>res.pid==this.pid)
      this.arr2=this.arr[0].productAll
      
    })
  }
  getSelectedValue(e:any){
     this.p=e.target.value
     console.log(this.p);
     
  }
  finalize(){
    this.arr2=this.arr[0].productAll.filter((res:any)=>{if(res.price<=this.p)
    {
      return res
    }})
    console.log(this.arr2); 
    
  }

}
