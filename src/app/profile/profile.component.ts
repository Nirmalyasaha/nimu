import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  obj:any={}
  obj1:any=[]
  constructor(private sto:StorageService,
    private ser:ServiceService) { }

  ngOnInit(): void {
    this.obj1=this.sto.getItem1()
    this.ser.userDe().subscribe((res:any)=>{
      this.obj=res.data
    })


  }

}
