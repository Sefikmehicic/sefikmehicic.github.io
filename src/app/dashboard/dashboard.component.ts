import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#navbar').hide();
    $('#footer').hide();
  }

  ngOnDestroy(): void{
    $('#navbar').show();
    $('#footer').show();
  }

  toggleNavIcon(): void {
    $('#navbar-toggler').toggleClass('bi-x-lg bi-list');
  }
}
