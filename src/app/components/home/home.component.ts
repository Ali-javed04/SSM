import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appointments=[
    {
      name:'One taste food Center',
      code:'5345-p',
      status:'approved'
    },
    {
      name:'One taste food Center',
      code:'5345-p',
      status:'pending',
      approvelby:'SSM Officer',
      recievedBy:'Approver2',
      istDate:'2021-03-20 10:40 AM',
      secondDate:'2021-03-20 10:40 AM'
    },
    {
      name:'One taste food Center',
      code:'5345-p',
      status:'rework'
    },
    {
      name:'One taste food Center',
      code:'5345-p',
      status:'reject',
      rejectedBy:'Approver2',
      rejectedAt:'12.09.2021',
      reason:'Insuffienet Document'
    },
    {
      name:'One taste food Center',
      code:'5345-p',
      status:'reject',
      rejectedBy:'Approver2',
      rejectedAt:'12.09.2021' ,
      reason:'Insuffienet Document'
    },
    {
      name:'One taste food Center',
      code:'5345-p',
      status:'pending',
      approvelby:'SSM Officer',
      recievedBy:'Approver2',
      istDate:'2021-03-20 10:40 AM',
      secondDate:'2021-03-20 10:40 AM'
    },
    {
      name:'One taste food Center',
      code:'5345-p',
      status:'draft'
    },
  ]
  show: number = -1;
  currentIndex: number;
  constructor() { }

  ngOnInit(): void {
  }
  expend(i) {
    this.show = i
    this.currentIndex = i
  }
  contract(i) {
    this.show = -1
    this.currentIndex = i
  }
}
