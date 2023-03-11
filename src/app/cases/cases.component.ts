import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  create: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url.includes('id')){
      this.create = true;
    }
  }
}
