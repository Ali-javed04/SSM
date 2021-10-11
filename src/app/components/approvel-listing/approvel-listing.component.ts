import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
@Component({
  selector: 'app-approvel-listing',
  templateUrl: './approvel-listing.component.html',
  styleUrls: ['./approvel-listing.component.scss']
})
export class ApprovelListingComponent implements OnInit {
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

  constructor(private appService: AppService) {
    ;
   }

  ngOnInit(): void {
    this.rows = this.appService.getData()
  }



}
