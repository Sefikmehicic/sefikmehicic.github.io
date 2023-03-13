import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SearchComponent } from './search/search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateCaseComponent } from './create-case/create-case.component';
import { CalculateComponent } from './calculate/calculate.component';
import { CasesComponent } from './cases/cases.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SearchHistoryComponent,
    HomeComponent,
    AboutComponent,
    CreateCaseComponent,
    CalculateComponent,
    CasesComponent,
    DashboardComponent
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
