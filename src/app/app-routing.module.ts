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

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Search', component: SearchComponent},
  { path: 'Search/History', component: SearchHistoryComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Create-Case', component: CreateCaseComponent},
  { path: 'Calculate', component: CalculateComponent},
  { path: 'Cases', component: CasesComponent},
  { path: 'Dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
