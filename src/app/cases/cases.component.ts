import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  offers: offerRow[] = [{
    offerNumber: '1001',
    createdDate: '2023-01-12',
    doneDate: '2023-02-12',
    customerName: 'Erik Ponti',
    customerAddress: 'Kungsgatan 9, Stockholm',
    totalCost: 76000,
    totalCostAfterReduction: 62000,
    status: true
  },
  {
    offerNumber: '1002',
    createdDate: '2023-01-15',
    doneDate: '-',
    customerName: 'Jan Peder',
    customerAddress: 'Arkens Väg 1, Handen',
    totalCost: 28500,
    totalCostAfterReduction: 21500,
    status: false
  },
  {
    offerNumber: '1003',
    createdDate: '2023-01-22',
    doneDate: '2023-01-28',
    customerName: 'Lina Hedman',
    customerAddress: 'Sveavägen 39, Stockholm',
    totalCost: 90000,
    totalCostAfterReduction: 75000,
    status: true
  },
  {
    offerNumber: '1004',
    createdDate: '2023-02-03',
    doneDate: '-',
    customerName: 'Sara Boye',
    customerAddress: 'Götgatan 128, Stockholm',
    totalCost: 14000,
    totalCostAfterReduction: 11000,
    status: false
  },
  {
    offerNumber: '1005',
    createdDate: '2023-02-13',
    doneDate: '-',
    customerName: 'Viking Von Klövimo',
    customerAddress: 'Stureplan 13, Stockholm',
    totalCost: 67000,
    totalCostAfterReduction: 56000,
    status: false
  }
];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}

export interface offerRow{
  offerNumber: string;
  createdDate: string;
  doneDate: string;
  customerName: string;
  customerAddress: string;
  totalCost: number;
  totalCostAfterReduction: number;
  status: boolean;
}

// export interface offer {
//   work: work[];
//   sumOfHours: number;
//   sumOfMaterialCost: number;
//   otherExpenses: number;
//   laborCost: number;
//   totalCost: number;
//   taxReduction: number;
//   totalCostAfterReduction: number;
// }