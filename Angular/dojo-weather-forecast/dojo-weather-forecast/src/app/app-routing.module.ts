import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'home', 
  component: NavbarComponent },

  { path: 'city/:name', 
  component: MainbodyComponent },

  { path: 'seattle', 
  component: MainbodyComponent },

  { path: 'sanjose', 
  component: MainbodyComponent },

  { path: 'LA', 
  component: MainbodyComponent },

  { path: 'dallas', 
  component: MainbodyComponent },
  
  { path: 'dc', 
  component: MainbodyComponent },
  
  { path: 'chicago', 
  component: MainbodyComponent },

  { path: 'city/:name', 
  component: DetailsComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
