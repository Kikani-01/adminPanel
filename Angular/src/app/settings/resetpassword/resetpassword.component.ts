import { Component, OnInit } from '@angular/core';
import { Login } from '../../auth/login.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ResetpasswordService } from '../../auth/resetpassword.service';


declare var M: any;
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
  providers: [ResetpasswordService]
})
export class ResetpasswordComponent implements OnInit {
  cupassword: string;
  password: string;
  npassword: string;
  copassword: string;
  constructor(private router: Router, private resetpasswordservice: ResetpasswordService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this. resetpasswordservice.postUser(form.value).subscribe((res) => {
      
      if (this.npassword != this.copassword) {
        alert('New Password and Confirm Password do not match');
        return;
      }

      // Save the new password.   
      if (this.cupassword == this.password) {
        this.resetpasswordservice.postUser(form.value).subscribe((res) => {
          this.npassword = this.password;
          M.toast({ html: 'Password change successfully', classes: 'rounded' });
          this.router.navigate(['/login']);
        })
       
      }

    }
    )};
}