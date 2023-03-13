import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  page: string = 'search';

  constructor() { }

  ngOnInit(): void {
    $('#navbar').hide();
  }

  ngOnDestroy(): void {
    $('#navbar').show();
  }
}
