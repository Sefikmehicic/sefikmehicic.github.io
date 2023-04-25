import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

declare var html2pdf: any;

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  modalRef?: BsModalRef;
  chosenRow!: offerRow;

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

  constructor(private router: Router, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>, row: offerRow) {
    this.chosenRow = row;
    console.log(this.chosenRow);
    this.modalRef = this.modalService.show(template);
  }

  downloadPDF():void {
    var element = document.getElementById('table');
    var opt = {
      pagebreak: 'avoid-all',
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save();
  }

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