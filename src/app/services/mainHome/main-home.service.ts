import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MainHomeService {

  constructor(private httpClient: HttpClient) { }
  list = 'http://54.251.236.175:8080/ssm-api/application/list'

  getAllapplicationList(page:number,offset:number) {
    return this.httpClient.get(`${this.list}?page=${page}&offset=${offset}`)
  }

}
