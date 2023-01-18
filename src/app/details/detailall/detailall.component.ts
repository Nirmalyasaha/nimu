import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-detailall',
  templateUrl: './detailall.component.html',
  styleUrls: ['./detailall.component.css']
})
export class DetailallComponent implements OnInit {
  id!:any;
  pid!:any;
  arr:any=[];
  arr2:any={};
  arr3:any=['this is all product']
  constructor(private ser:ServiceService,
    private s1:ActivatedRoute,
    private sto:StorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.s1.paramMap.subscribe((params)=>{
     this.id=params.get('id')
     this.arr=this.ser.pobj.filter((res:any)=>res.id==this.id)
     this.pid=params.get('pid')
      this.arr=this.arr[0].product.filter((res:any)=>res.pid==this.pid)
      let name=params.get('name1')
      this.arr2=this.arr[0].productAll.find((res:any)=>res.name1==name)

    })
  }
  doOrder(){
    if(localStorage.getItem('f_name')!=null){
    let a1=this.sto.getItem1() || []; 
    this.sto.setItem1(this.arr2.name1,this.arr2.price,a1,1)
    this.router.navigateByUrl('/order')
    }
    else{
      this.router.navigateByUrl('/profile')
    }
  }

}
