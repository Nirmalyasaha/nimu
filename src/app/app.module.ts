import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SingupComponent } from './singup/singup.component';
import { SigninComponent } from './signin/signin.component';
import { ServiceService } from './services/service.service';
import { ProductComponent } from './product/product.component';
import { ProductAllComponent } from './product-all/product-all.component';
import { CustomPipe } from './pipes/custom.pipe';
import { TokeninService } from './services/tokenin.service';
import { StorageService } from './services/storage.service';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';
import { RatingComponent } from './rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SingupComponent,
    SigninComponent,
    ProductComponent,
    ProductAllComponent,
    CustomPipe,
    OrderComponent,
    FooterComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [ServiceService,StorageService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
