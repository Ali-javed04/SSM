import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovelListingComponent } from './components/approvel-listing/approvel-listing.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './services/authguard/auth.guard';

const routes: Routes = [
  {
    path:'',component: HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'approvelListing',component: ApprovelListingComponent
  },
  {
    path:'registration',component: RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
