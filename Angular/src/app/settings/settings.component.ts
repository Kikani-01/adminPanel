import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
password:string;
newpwd:string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    
  }
}
