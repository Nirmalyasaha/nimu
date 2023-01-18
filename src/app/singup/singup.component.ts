import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  addform!:FormGroup;
  selectedimg!:File;
  constructor(private ser:ServiceService) { }

  ngOnInit(): void {
    this.addform=new FormGroup({
     first_name:new FormControl(''),
     last_name: new FormControl(''),
     email:new FormControl(''),
     password:new FormControl('')
    })
  }
  addpic(e:any){
    this.selectedimg=e.target.files[0];
  }
  submitData(){
    let final=this.addform.value;
    const form1:FormData=new FormData()
    form1.append('first_name',final.first_name)
    form1.append('last_name',final.last_name)
    form1.append('email',final.email)
    form1.append('password',final.password)
    form1.append('profile_pic',this.selectedimg,this.selectedimg.name)
    this.ser.uSignup(form1).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

}
