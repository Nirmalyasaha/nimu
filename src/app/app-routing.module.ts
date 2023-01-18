import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductAllComponent } from './product-all/product-all.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import { OrderComponent } from './order/order.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
{path:'log',component:SigninComponent},
{path:'signup',component:SingupComponent},
{path:'order',component:OrderComponent},
{path:':id',component:ProductComponent},
{path:'rating',component:RatingComponent},
{path:':id/:pid',component:ProductAllComponent},
{ path: ':id/:pid/:name1', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
