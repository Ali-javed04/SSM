import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit ,DoCheck{
  openn : string = "";
  notifications = 2;
  notShow = true
  openV:boolean = true
  constructor(private router: Router) { }
  currenturl: string = '';
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

   if(document.getElementById("inner"))
   {
     document.getElementById("inner")!.style.marginLeft  = "-1px";
   }

   if(document.getElementById("main-div"))
   {
     if(window.screen.width < 576)
     {
       document.getElementById("main-div")!.style.marginLeft  = "0px";
     }
     else
     {
       document.getElementById("main-div")!.style.marginLeft  = "60px";
     }
   }

   if(document.getElementById("footer"))
   {
     document.getElementById("footer")!.style.marginLeft  = "-1px";
   }

  //  if(document.getElementById("nav"))
  //  {
  //    if(window.screen.width < 576)
  //    {
  //      document.getElementById("nav")!.style.marginLeft  = "0px";
  //    }
  //    else
  //    {
  //      document.getElementById("nav")!.style.marginLeft  = "60px";
  //    }
  //  }

   if(document.getElementById("icons1"))
   {
     document.getElementById("icons1")!.style.opacity  = "0";
     document.getElementById("icons1")!.style.display  = "none";
   }
  }
   currentState(url:string) : boolean {
    return this.currenturl.includes(url)
   }
   open(a)
 {
  this.openV = !this.openV
   this.openn = a;
  //  if(document.getElementById("logo"))
  //  {
  //    document.getElementById("logo")!.style.opacity  = "0";
  //  }

   if(document.getElementById("sidebar"))
   {
     document.getElementById("sidebar")!.style.width  = "250px";
   }

  //  if(document.getElementById("nav"))
  //  {
  //    document.getElementById("nav")!.style.marginLeft  = "250px";
  //  }

   if(document.getElementById("footer"))
   {
     document.getElementById("footer")!.style.marginLeft  = "-1px";
   }

   if(document.getElementById("main-div"))
   {
     document.getElementById("main-div")!.style.marginLeft  = "250px";
   }

   if(document.getElementById("icons"))
   {
     document.getElementById("icons")!.style.opacity  = "0";
     document.getElementById("icons")!.style.display  = "none";
   }

   if(document.getElementById("icons1"))
   {
     document.getElementById("icons1")!.style.display  = "block";
     setTimeout(() => document.getElementById("icons1")!.style.opacity = "1", 300);
   }

 }


 close()
 {
  this.openV = !this.openV
  //  if(document.getElementById("logo"))
  //  {
  //    document.getElementById("logo")!.style.opacity  = "1";
  //  }

   if(document.getElementById("sidebar"))
   {
     document.getElementById("sidebar")!.style.width  = "60px";
   }

  //  if(document.getElementById("nav"))
  //  {
  //    document.getElementById("nav")!.style.marginLeft  = "60px";
  //  }

   if(document.getElementById("footer"))
   {
     document.getElementById("footer")!.style.marginLeft  = "-1px";
   }

   if(document.getElementById("main-div"))
   {
     document.getElementById("main-div")!.style.marginLeft  = "60px";
   }

   if(document.getElementById("icons"))
   {
     document.getElementById("icons")!.style.display  = "block";
     setTimeout(() => document.getElementById("icons")!.style.opacity = "1", 300);
   }

   if(document.getElementById("icons1"))
   {
     document.getElementById("icons1")!.style.opacity  = "0";
     document.getElementById("icons1")!.style.display  = "none";
   }

 }
 ngDoCheck()
 {
   if(this.openn != 'a')
    {
     if(document.getElementById("inner"))
     {
       document.getElementById("inner")!.style.marginLeft  = "-1px";
     }

     if(document.getElementById("main-div"))
     {
       if(window.screen.width < 576)
       {
         document.getElementById("main-div")!.style.marginLeft  = "0px";
       }
       else
       {
         document.getElementById("main-div")!.style.marginLeft  = "60px";
       }
     }

     if(document.getElementById("footer"))
     {
       document.getElementById("footer")!.style.marginLeft  = "-1px";
     }

    //  if(document.getElementById("nav"))
    //  {
    //    if(window.screen.width < 576)
    //    {
    //      document.getElementById("nav")!.style.marginLeft  = "0px";
    //    }
    //    else
    //    {
    //      document.getElementById("nav")!.style.marginLeft  = "60px";
    //    }
    //  }

     if(document.getElementById("icons1"))
     {
       document.getElementById("icons1")!.style.opacity  = "0";
       document.getElementById("icons1")!.style.display  = "none";
     }
    }

 }
 logout() {
   localStorage.removeItem('authenticatedByLoginToken')
   localStorage.removeItem('userData')
   this.router.navigateByUrl('/login')
 }
 public get identity() {
    return JSON.parse(localStorage.getItem('userData'))
}
}
