import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChuckComponent} from './chuck/chuck.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'chuck', component: ChuckComponent},
  { path: '',   redirectTo: '/chuck', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
