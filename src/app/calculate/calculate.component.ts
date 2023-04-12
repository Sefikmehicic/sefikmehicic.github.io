import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})

export class CalculateComponent implements OnInit {
  type: string = "none";
  customerId: string = "";
  showInfo: boolean = false;

  Rot: calc =
    {
      rows: [
        { name: 'Bygg', hours: 0, materialCost: 0 },
        { name: 'El', hours: 0, materialCost: 0 },
        { name: 'Glas/Plåt', hours: 0, materialCost: 0 },
        { name: 'Mark/Dränering', hours: 0, materialCost: 0 },
        { name: 'Målning/Tapetsering', hours: 0, materialCost: 0 },
        { name: 'Bygg', hours: 0, materialCost: 0 },
        { name: 'VVS', hours: 0, materialCost: 0 }
      ],
      sumOfHours: 0,
      sumOfMaterialCost: 0
    };

    Rut: calc =
    {
      rows: [
        { name: 'Barnpassning', hours: 0, materialCost: 0 },
        { name: 'Flyttjänster', hours: 0, materialCost: 0 },
        { name: 'IT-tjänster', hours: 0, materialCost: 0 },
        { name: 'Kläd- och textilvård', hours: 0, materialCost: 0 },
        { name: 'Möblering', hours: 0, materialCost: 0 },
        { name: 'Personlig omsorg', hours: 0, materialCost: 0 },
        { name: 'Reparation av vitvaror', hours: 0, materialCost: 0 },
        { name: 'Snöskottning', hours: 0, materialCost: 0 },
        { name: 'Städning', hours: 0, materialCost: 0 },
        { name: 'Tillsyn av bostad', hours: 0, materialCost: 0 },
        { name: 'Trädgårdsarbete', hours: 0, materialCost: 0 }
      ],
      sumOfHours: 0,
      sumOfMaterialCost: 0
    };

  constructor(private router: Router, private route: ActivatedRoute) { }

  typeOfWork(value: any) {
    this.type = value.target.value;
  }

  RotHourSum() {
    this.Rot.sumOfHours = this.Rot.rows.map(i => i.hours).reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  RotMaterialCostSum() {
    this.Rot.sumOfMaterialCost = this.Rot.rows.map(i => i.materialCost).reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  RutHourSum(){
    this.Rut.sumOfHours = this.Rut.rows.map(i => i.hours).reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  RutMaterialCostSum(){
    this.Rut.sumOfMaterialCost = this.Rut.rows.map(i => i.materialCost).reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  search(): void {
    if (this.customerId) {
      this.showInfo = true;
    }
    else {
      this.showInfo = false;
    }
  }

  ngOnInit(): void {
    if (this.router.url.includes('id')) {
      this.route.queryParams
        .subscribe(params => {
          this.customerId = params["id"];
          this.showInfo = true;
        }
        );
    }
  }
}

export interface calc {
  rows: rows[];
  sumOfHours: number;
  sumOfMaterialCost: number;
}

export interface rows {
  name: string;
  hours: number;
  materialCost: number;
}
