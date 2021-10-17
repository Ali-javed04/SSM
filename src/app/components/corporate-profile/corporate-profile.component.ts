import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-corporate-profile',
  templateUrl: './corporate-profile.component.html',
  styleUrls: ['./corporate-profile.component.scss']
})
export class CorporateProfileComponent implements OnInit {


  appointments=[
    {
      name:'Total Approved',
      code:'5345-p',
      total:'2,231',
      status:'approved'
    },
    {
      name:'Total Rejected',
      code:'5345-p',
      total:'2,231',
      status:'reject'
    },
    {
      name:'Total Rework',
      code:'5345-p',
      total:'2,231',
      status:'rework'
    },
    {
      name:'Total Pending',
      code:'5345-p',
      total:'2,231',
      status:'pending'
    },
  ]

  p: number[] = [];
  rows: { id: string; name: string; phone: string; company: string; zip: string; city: string; date: string; country: string; }[];
  selectedTable: string;
  isnum = 'bussinessRegistration'

  constructor(private appService: AppService) {
    ;
   }

  ngOnInit(): void {
    this.rows = this.appService.getData()
    this.EventChange('bussinessRegistration')
  }
  EventChange(e) {
    this.selectedTable = e
  }


}
