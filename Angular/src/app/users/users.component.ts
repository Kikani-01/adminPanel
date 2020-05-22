import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import{UserService } from '../shared/user.service';

declare var M :any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private router: Router,private userservice:UserService) { }
  ngOnInit() {
    this.resetForm();
    this.refreshUserList();
  
  }
  resetForm(form?: NgForm){
    if(form)
      form.reset();
      this.userservice.selectedUser = {
       _id: "",
       username:"",
       email:"",
       password:"",
       country:"",
       state:"",
       city:"", 
      }
  }
  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.userservice.postUser(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshUserList();
      M.toast({html:'Saved successfully',classes: 'rounded'});
    }); 
  }
  else{
    this.userservice.putUser(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshUserList();
      M.toast({html:'Updated successfully',classes: 'rounded'});
    });
  }
  }
  refreshUserList(){
    this.userservice.getUserList().subscribe((res) =>{
      this.userservice.users = res as User[];
    });
  }
  onEdit(usr: User){
     this.userservice.selectedUser = usr;
  }
  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to delete this user? ') == true){
      this.userservice.deleteUser(_id).subscribe((res) =>{
        this.refreshUserList();
        this.resetForm(form);
        M.toast({html:'Deleted successfully',classes: 'rounded'});
      })
    }
  }
}