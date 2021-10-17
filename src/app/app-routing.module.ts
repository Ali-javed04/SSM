import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovelListingComponent } from './components/approvel-listing/approvel-listing.component';
import { CorporateProfileComponent } from './components/corporate-profile/corporate-profile.component';
import { EntityInvolvementComponent } from './components/entity-involvement/entity-involvement.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NameSearchComponent } from './components/name-search/name-search.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WorkFlowComponent } from './components/work-flow/work-flow.component';
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
  {
    path:'nameSearch',component: NameSearchComponent
  },
  {
    path:'entityInvolvement',component: EntityInvolvementComponent
  },
  {
    path:'corporateProfile',component: CorporateProfileComponent
  },
  {
    path:'workFlow',component: WorkFlowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
