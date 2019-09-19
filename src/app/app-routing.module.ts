import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
  {
    path: '',
    component: ClubListComponent
  },
  { 
    path: "club/:team_key", 
    component: ClubComponent 
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
