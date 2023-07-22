import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/components/layout/layout.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: LayoutComponent, children:[
    {path: 'home', component: HomeComponent},
    {path: "recommended", loadComponent: () => import('./recommended/recommended.component').then(m => m.RecommendedComponent) },
    {path: 'categories', loadComponent: () => import('./categories/categories.component').then(m => m.CategoriesComponent)},
    {path: 'buy', loadComponent: () => import('./buy/buy.component').then( m => m.BuyComponent)}
  ]},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
