import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  s:any=[]
  s1:any
  count:number=1;
  constructor() { }
  setData(first_name:string,last_name:string,email:string,token:string,arr:any[]){
    window.localStorage.setItem('f_name',first_name)
    window.localStorage.setItem('l_name',last_name)
    window.localStorage.setItem('email',email)
    window.localStorage.setItem('token',token)
  }
  getToken(){
    return window.localStorage.getItem('token')
  }
  getDestroy(){
    window.localStorage.clear()
  }
  getName(){
    let obj={fname:window.localStorage.getItem('f_name'),
  lname:window.localStorage.getItem('l_name')}
  return obj
  }
  setItem1(name1:string,price:number,store:any[],q:number){
    let obj={
      Pname:name1,
      Pprice:price,
      quantity:q
    }
    store.push(obj)
    localStorage.setItem('arr', JSON.stringify(store));
  }
  getItem1(){
    this.s1= localStorage.getItem('arr')
    this.s=JSON.parse(this.s1)
    return this.s
  }
  
}
