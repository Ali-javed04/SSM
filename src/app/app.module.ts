import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ApprovelListingComponent } from './components/approvel-listing/approvel-listing.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NameSearchComponent } from './components/name-search/name-search.component';
import { EntityInvolvementComponent } from './components/entity-involvement/entity-involvement.component';
import { CorporateProfileComponent } from './components/corporate-profile/corporate-profile.component';
import { WorkFlowComponent } from './components/work-flow/work-flow.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/intercepter/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    ApprovelListingComponent,
    RegistrationComponent,
    NameSearchComponent,
    EntityInvolvementComponent,
    CorporateProfileComponent,
    WorkFlowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
