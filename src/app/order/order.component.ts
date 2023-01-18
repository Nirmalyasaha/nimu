import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  arr:any=[]
  sum:number=0
  bool:boolean=true
  constructor(private sto:StorageService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.arr=this.sto.getItem1();
    for(let a of this.arr){
      this.sum=this.sum+a.Pprice;
    }
    
  }
  confirmOr(){
    alert(`payment of Rs:${this.sum}/- is successfull`)
    localStorage.removeItem('arr')
    this.bool=false;
    this.route.navigateByUrl('/rating')

  }
  delete1(i:number){
    this.arr=this.sto.getItem1();
    this.arr.splice(i,1)
    this.sum=0;
    for(let a of this.arr){
      this.sum=this.sum+a.Pprice;
    }
    localStorage.setItem('arr',JSON.stringify(this.arr)) 
  }
  reduceQ(i:number){
    this.arr=this.sto.getItem1();
    let j=this.arr[i].Pprice;
    let k= this.arr[i].quantity;
    j=j/k
    this.sum=this.sum-j;
    k=k-1;
    j=j*k;
    this.arr[i].Pprice=j;
    this.arr[i].quantity=k;
    if(k==0)
    {
      this.arr=this.sto.getItem1();
      this.arr.splice(i,1)
      localStorage.setItem('arr',JSON.stringify(this.arr)) 
    }
    localStorage.setItem('arr',JSON.stringify(this.arr)) 
    
  }
  increaseQ(i:number){
    let j=this.arr[i].Pprice;
    let k= this.arr[i].quantity;
    j=j/k
    this.sum=this.sum+j;
    k=k+1;
    j=j*k;
    this.arr[i].Pprice=j;
    this.arr[i].quantity=k;
    localStorage.setItem('arr',JSON.stringify(this.arr)) 
  }

}
