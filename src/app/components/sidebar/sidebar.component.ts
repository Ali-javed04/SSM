import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  openn : string = "";
  currenturl: string = '';
 constructor(public router: Router) {
  }


 ngOnInit(): void {
   this.router.events.pipe(
     filter((event:any) => event instanceof NavigationEnd)
   ).subscribe((event: any) => {
  if(event.url =='/') {
       this.currenturl = 'home'
     }else if(event.url == '/detail') {
       this.currenturl = 'common'
     }else if(event.url == '/gallery') {
       this.currenturl = 'common'
     }else if(event.url == '/videoDetails ') {
       this.currenturl = 'common'
     }else if(event.url == '/listingStep1') {
       this.currenturl = 'common'
     }else if(event.url == '/listingStep2') {
       this.currenturl = 'common'
     }else if(event.url == '/listingStep3') {
       this.currenturl = 'common'
     }else if(event.url == '/listingStep4') {
       this.currenturl = 'common'
     }else if(event.url == '/listingStep5') {
       this.currenturl = 'common'
     }else if(event.url == '/listingStep6') {
       this.currenturl = 'common'
     }else if(event.url == '/listingReport') {
       this.currenturl = 'common'
     }
     else if(event.url == '/search') {
       this.currenturl = 'common'
     }
     else if(event.url == '/mapSearch') {
       this.currenturl = 'common'
     }
     else if(event.url == '/listing') {
       this.currenturl = 'common'
     }
     else {
       this.currenturl = event.url
     }
   });

 }



 links =
 [

   {
     text:'Dashboard',
     link:'/personal',
   },
   {
     text:'Messages',
     link:'/business',
   },
   {
     text:'Contacts',
     link:'/contacts',
   },
   {
     text:'Balances',
     link:'/company',
   },
   {
     text:'Products',
     link:'/product',
   },
   {
     text:'Invoices',
     link:'/Invoices',
   },
   {
     text:'Dontaions',
     link:'/crowdfunding',
   },
   {
     text:'Pay Request',
     link:'/feeds',
   },
   {
     text:'Pay Recieved',
     link:'/profile',
   },
   {
     text:'Settings',
     link:'/settings/company-profile',
   },
   {
     text:'Support',
     link:'/support',
   },
   {
     text:'Home',
     link:'/home',
   },
   {
     text:'Saved',
     link:'/home',
   },
   {
     text:'Search',
     link:'/home',
   }
 ]


 currentState(url:string) : boolean {
   return this.currenturl.includes(url)
  }
}

