import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';   // enables routing functionality

import { HeroesComponent } from './heroes/heroes.component';  // this is where the Router goes once the routes are configured
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({   // @NgModule initializes the router and starts it listening for browser location changes
  imports: [RouterModule.forRoot(routes)],    // the forRoot function configures the AppRoutingModule
  exports: [RouterModule]   // exporting makes it available throughout the application
})
export class AppRoutingModule { }
