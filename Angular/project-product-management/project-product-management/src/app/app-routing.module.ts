import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [
  { 
  path: 'home', 
  pathMatch: 'full',
  component: HomePageComponent,
  children: [] 
  },
  { 
    path: 'create', 
    pathMatch: 'full',
    component: ProductCreationComponent,
    children: [] 
  },
  { 
    path: 'list/edit', 
    pathMatch: 'full',
    component: ProductEditComponent,
    children: [] 
  },
  { 
    path: 'list', 
    pathMatch: 'full',
    component: ProductListComponent,
    children: [] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
