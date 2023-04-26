import { Component, Injectable, OnInit } from '@angular/core';
import { Database, child, off } from "@angular/fire/database";
import { getDatabase, push, ref, set } from "firebase/database";

@Component({
  selector: 'app-do',
  template: ' '
})

@Injectable({
    providedIn: 'root'
  })

export class DOComponent implements OnInit {

  constructor(private db: Database) { }

  SetNewOffer(offer: Offer): void {
    console.log(offer);
    this.db = getDatabase();
    console.log('OK')
    var newKey = push(child(ref(this.db), 'Offers')).key;
    set(ref(this.db, 'Offers/' + newKey), {
        CustomerName: offer.customerName,
        CustomerID: offer.CustomerID,
        TotaltSum: offer.TotalSum
    });
}

  ngOnInit(): void {
  }

}

export interface Offer {
  CustomerID: string;
  customerName: string;
  TotalSum: number;
}
