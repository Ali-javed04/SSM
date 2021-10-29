import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  url = 'https://ssm-api.amastsales.com/login'
  url2='https://ssm-api.amastsales.com/user/profile'
  login(data) {
    return this.httpClient.post(this.url,data)
  }
  getProfile() {
    let data={
      userName:'ali',
      password:123456
    }
    return this.httpClient.get(this.url2)
  }
}
