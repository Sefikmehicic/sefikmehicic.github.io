import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full'},
  { path: 'Search', component: SearchComponent},
  { path: 'Search/History', component: SearchHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
