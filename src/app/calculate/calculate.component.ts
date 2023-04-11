import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  type: string = "none";
  customerId: string = "";

  constructor(private router: Router, private route: ActivatedRoute) { }

  onChange(value: any) {
    this.type = value.target.value;
}

  ngOnInit(): void {
    if(this.router.url.includes('id')){
      this.route.queryParams
      .subscribe(params => {
        this.customerId = params["id"];
      }
    );
    }
  }

}
