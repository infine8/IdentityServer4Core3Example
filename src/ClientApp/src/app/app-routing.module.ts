import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DataComponent } from "./data/data.component";
import { AuthorizeGuard } from "./api-authorization/authorize.guard";


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'data', component: DataComponent, canActivate: [AuthorizeGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
