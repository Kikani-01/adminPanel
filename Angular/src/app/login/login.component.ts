import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginService } from '../auth/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username : string;
  password:string;
  form:  FormGroup;


  constructor(
    private router:Router,
    private fb: FormBuilder,
    private loginservice: LoginService) { }

    onSubmit(form : NgForm){
      this.loginservice.postUser(form.value).subscribe((res) =>{
       if(this.username == 'Admin' && this.password == 'admin@123') {
      this.router.navigate(['/dashboard']);
       }else {
      alert("Invalid credentials.")
       }
    },
       ) }

 ngOnInit() {
  this.form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}


}
