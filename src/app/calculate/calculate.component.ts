import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { __values } from 'tslib';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})

export class CalculateComponent implements OnInit {
  modalRef?: BsModalRef;
  type: string = "none";
  customerId: string = "";
  showInfo: boolean = false;

    Customer: customer = {
      name: 'Eva Larsson',
      address: 'Götgatan 35',
      postalCodeAndCity: '116 21 Stockholm',
      offerNumber: '1001',
      rotrut: 3000
    };

    Rot: offer =
    {
      work: [
        { name: 'Bygg', hours: 0, materialCost: 0 },
        { name: 'El', hours: 0, materialCost: 0 },
        { name: 'Glas/Plåt', hours: 0, materialCost: 0 },
        { name: 'Mark/Dränering', hours: 0, materialCost: 0 },
        { name: 'Målning/Tapetsering', hours: 0, materialCost: 0 },
        { name: 'Bygg', hours: 0, materialCost: 0 },
        { name: 'VVS', hours: 0, materialCost: 0 }
      ],
      sumOfHours: 0,
      sumOfMaterialCost: 0,
      otherExpenses: 0,
      laborCost: 0,
      totalCost: 0,
      taxReduction: 0,
      totalCostAfterReduction: 0
    };

    Rut: offer =
    {
      work: [
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
      sumOfMaterialCost: 0,
      otherExpenses: 0,
      laborCost: 0,
      totalCost: 0,
      taxReduction: 0,
      totalCostAfterReduction: 0
    };

  constructor(private router: Router, private route: ActivatedRoute, private modalService: BsModalService) { }

  typeOfWork(value: any) {
    this.type = value.target.value;
  }

  RotHourSum() {
    this.Rot.sumOfHours = this.Rot.work.map(i => i.hours).reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  RotCalculateSum() {
    this.Rot.sumOfMaterialCost = this.Rot.work.map(i => i.materialCost).reduce(function (a, b) {
      return a + b;
    }, 0);
    if(this.Rot.laborCost != 0 || this.Rot.laborCost != null){
      this.Rot.totalCost = this.Rot.sumOfMaterialCost + this.Rot.laborCost + this.Rot.otherExpenses;
    }
    else{
      this.Rot.totalCost = this.Rot.sumOfMaterialCost + this.Rot.otherExpenses;
    }
    this.Rot.taxReduction = (this.Rot.laborCost * 30/100) > this.Customer.rotrut ?  this.Customer.rotrut : (this.Rot.laborCost * 30/100);
    this.Rot.totalCostAfterReduction = this.Rot.totalCost - this.Rot.taxReduction;
  }

  RutHourSum(){
    this.Rut.sumOfHours = this.Rut.work.map(i => i.hours).reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  RutCalculateSum(){
    this.Rut.sumOfMaterialCost = this.Rut.work.map(i => i.materialCost).reduce(function (a, b) {
      return a + b;
    }, 0);
    if(this.Rut.laborCost != 0 || this.Rut.laborCost != null){
      this.Rut.totalCost = this.Rut.sumOfMaterialCost + this.Rut.laborCost + this.Rut.otherExpenses;
    }
    else{
      this.Rut.totalCost = this.Rut.sumOfMaterialCost + this.Rut.otherExpenses;
    }
    this.Rut.taxReduction = (this.Rut.laborCost * 50/100) > this.Customer.rotrut ?  this.Customer.rotrut : (this.Rut.laborCost * 50/100);
    this.Rut.totalCostAfterReduction = this.Rut.totalCost - this.Rut.taxReduction;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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

export interface offer {
  work: work[];
  sumOfHours: number;
  sumOfMaterialCost: number;
  otherExpenses: number;
  laborCost: number;
  totalCost: number;
  taxReduction: number;
  totalCostAfterReduction: number;
}

export interface work {
  name: string;
  hours: number;
  materialCost: number;
}

export interface customer {
  name: string;
  address: string;
  postalCodeAndCity: string;
  offerNumber: string;
  rotrut: number;
}
