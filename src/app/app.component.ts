import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  name:any={};
  constructor(private sto:StorageService,
    private router:Router){}
    ngOnInit(){
      this.name=this.sto.getName()
      
    }
  isLogin(){
    let t=this.sto.getToken()
    return t
  }
  logout(){
    this.sto.getDestroy();
    this.router.navigateByUrl('/')
  }
}
