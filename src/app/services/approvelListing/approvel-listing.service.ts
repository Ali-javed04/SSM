import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprovelListingService {


  constructor(private httpClient: HttpClient) { }
  list = 'http://54.251.236.175:8080/ssm-api/approval/list'
  summary='http://54.251.236.175:8080/ssm-api/approval/summary'
  getSummary() {
    return this.httpClient.get(this.summary)
  }
  getList(page:number,offset:number) {

    return this.httpClient.get(`${this.list}?page=${page}&offset=${offset}`)
  }
}
