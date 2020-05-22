import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../Service/apiservice.service';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiserviceService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['users']);
      });
  }

}