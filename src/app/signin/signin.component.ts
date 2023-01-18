import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:any={}
  arr:any=[]
  constructor(private ser:ServiceService,
    private s1:StorageService,
    private router:Router ) { }

  ngOnInit(): void {
  }
  submitData(addform:NgForm){
    let data=addform.value
    this.ser.usignin(data).subscribe((res:any)=>{
      this.user=res;
      console.log(this.user);
      
      this.s1.setData(this.user.data.first_name,
        this.user.data.last_name,
        this.user.data.email,
        this.user.token,this.arr)
        this.router.navigateByUrl('/profile')
      
    })

  }

}
