import { Component } from '@angular/core';
import { debug } from 'util';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';


declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
 
  isLoggedIn$: Observable<boolean>;
  constructor(private router: Router,private userservice:UserService ){
    // console.log(this.router.url)
    // if(this.router.url=='/login'){
    //   this.islogin=false;
    // }
   
  }
  ngOnInit() {
    // this.isLoggedIn$ = this.userservice.isLoggedIn;
  }

  ngAfterViewInit(){
    $(document).ready(function () {
    
      $("#sidebarCollapse").click(function(e) {
        $("#sidebar").toggleClass("active");

        $(".wrapper").toggleClass("selcted")
    });
  });
  }
}
