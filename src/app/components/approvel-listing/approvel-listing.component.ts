import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { ApprovelListingService } from 'src/app/services/approvelListing/approvel-listing.service';
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
rows:any[]
  summary:any
  total: number;

  constructor(
    private approvelListingService: ApprovelListingService) {
    ;
   }

  ngOnInit(): void {
    this.getAllSummary()
    this.getAllApprovelList(1,10)
  }

  getAllSummary() {
    this.approvelListingService.getSummary().subscribe((response:any)=>{
      console.log('summary',response.summary)
      this.summary = response.summary
    },(error)=>{
      console.log(error)
    })
  }
  getAllApprovelList(page:number,offset:number) {
    this.approvelListingService.getList(page,offset).subscribe((response:any)=>{
      const abc = response.approvals
      console.log(abc)
      this.rows = abc.approvals.rows
      this.total  =abc.approvalscount
      this.p = abc.approvals.page


    },(error)=>{
      console.log(error)
    })
  }
  getPage(page: number) {
   this.getAllApprovelList(page,10)
}
}
