import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component} from '@angular/core';
import { Observable} from 'rxjs';
import {map,shareReplay} from 'rxjs/operators'






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'ResponsiveNav';
  
  opened=true;


  isMobile$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()

  );
    navData= Array.from({ length: 10 }, (_, i) => `Data ${i + 1}`);
  navContent = Array.from(

    { length: 10 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  constructor(private breakpointObserver:BreakpointObserver){

     }
     toggle(){
       this.opened=!this.opened
     }
}



