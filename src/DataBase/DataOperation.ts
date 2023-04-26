import { child, off } from "@angular/fire/database";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set } from "firebase/database";
import { environment } from "src/environments/environment";


const app = initializeApp(environment.firebase);
const database = getDatabase(app);
export const todosRef = ref(database, "Offers");


export class DataOperationComponent {

    SetNewOffer(offer: Offer): void {
        console.log(offer);
        const db = getDatabase();
        var newKey = push(child(ref(db), 'Offers')).key;
        set(ref(db, 'Offers/' + newKey), {
            CustomerName: offer.customerName,
            CustomerID: offer.CustomerID,
            TotaltSum: offer.TotalSum
        });
    }
}

export interface Offer {
    CustomerID: string;
    customerName: string;
    TotalSum: number;
}