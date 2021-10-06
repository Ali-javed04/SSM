import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/authguard/home/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string = ''
  password:string = ''
  constructor(private router: Router,
    private homeService:HomeService) { }

  ngOnInit(): void {
  }
  signin() {
    let detail = {
      username: this.username,
      password: this.password
    }
    localStorage.setItem('authenticatedByLoginToken',JSON.stringify(detail))
    this.router.navigateByUrl('/')
    this.homeService.assideBarShow.next(true)

  }
}
