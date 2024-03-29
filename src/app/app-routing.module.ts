import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateCaseComponent } from './create-case/create-case.component';
import { CalculateComponent } from './calculate/calculate.component';
import { CasesComponent } from './cases/cases.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { 
    path: '', component: HomeComponent,
    children: [
      {
        path: 'about', component: AboutComponent
      }
    ]
  },
  // { path: 'Home', component: HomeComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Create-Case', component: CreateCaseComponent},
  { path: 'Calculate', component: CalculateComponent},
  { path: 'Cases', component: CasesComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'search', component: SearchComponent
      },
      {
        path: 'cases', component: CasesComponent
      },
      {
        path: 'create-case', component: CreateCaseComponent
      },
      {
        path: 'calculate', component: CalculateComponent
      },
      {
        path: 'home', component: DashboardHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
