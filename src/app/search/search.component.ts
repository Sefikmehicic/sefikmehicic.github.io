import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

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
  historyBtnText: string = ' Tidigare sökningar'
  logOutBtnText: string = 'Logga ut'
  userInput: string = '';

  Search(){
    if(this.userInput.length < 1){
      this.blankInput = false;
    }
    else{
      if(this.result){
        this.showSpinner = false;
        this.result = true;
        setTimeout(() =>{
          this.ShowResult()
        }, 1000)
      }
      else{
        this.NewSearch();
      }
    }
  }

  ShowResult(){
      this.showSpinner = true;
      this.result = false;
      this.searchBtnText = 'Ny sökning';
  }

  NewSearch(){
    this.result = true;
    this.searchBtnText = 'Sök';
    this.userInput = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
  }
}