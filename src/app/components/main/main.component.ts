import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HomeService } from 'src/app/services/authguard/home/home.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  notShow = true
  currenturl: string = '';
  constructor(private router:Router,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
   if(event.url =='/') {
        this.currenturl = 'home'
      }else {
        this.currenturl = event.url
        if(this.currenturl =='/login') {
          this.notShow = false
        }
      }


    });
    this.homeService.assideBarShow.subscribe((response:boolean)=>{
      this.notShow = response
    })
  }


}
