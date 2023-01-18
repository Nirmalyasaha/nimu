import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { DetailallComponent } from './detailall/detailall.component';
import { Footer1Component } from './footer1/footer1.component';



@NgModule({
  declarations: [
    DetailsComponent,
    DetailallComponent,
    Footer1Component
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
