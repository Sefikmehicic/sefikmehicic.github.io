import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  showSpinner = true;
  blankInput = true;
  result = true;
  searchBtnText: string = 'Sök'
  userInput: string = '';

  Search(){
    if(this.userInput.length < 1){
      this.blankInput = false;
    }
    else{
      if(this.result){
        this.blankInput = true;
        this.showSpinner = false;
        this.result = true;
        setTimeout(() =>{
          this.ShowResult()
        }, 1000)
      }
      else{
        location.reload();
      }
    }
  }

  ShowResult(){
      this.showSpinner = true;
      this.result = false;
      this.searchBtnText = 'Ny sökning';
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}

