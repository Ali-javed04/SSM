import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/authguard/home/home.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string = ''
  password:string = ''
  constructor(private router: Router,
    private homeService:HomeService,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }
  signin() {
    let detail = {
      userId: this.username,
      password: this.password
    }
    this.loginService.login(detail).subscribe((response:any)=>{
      console.log(response)
      localStorage.setItem('authenticatedByLoginToken',response.token)
      this.router.navigateByUrl('/')
      this.homeService.assideBarShow.next(true)
      this.userData()

    },(error)=>console.log(error))

  }
   userData() {
     this.loginService.getProfile().subscribe((response)=>{
       console.log('userData',response)
       localStorage.setItem('userData',JSON.stringify(response))

     })
   }
}
