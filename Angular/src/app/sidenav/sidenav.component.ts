import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  
  ngAfterViewInit(){}

  ngOnInit() {
   
    $(document).ready(function () {
      $("#sidebarCollapse").click(function(e) {
        e.preventDefault();
        $("#sidebar").toggleClass("active");
  });
    });

  }

}
