import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ROTUR';

  public testFunction(text: string): string {
    text += ' Tillagd text!';
    return text;
  }
}
