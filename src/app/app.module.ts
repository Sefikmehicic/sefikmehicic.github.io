import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SearchComponent } from './search/search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    FormsModule 
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
