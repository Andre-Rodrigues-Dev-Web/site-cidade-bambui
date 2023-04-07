import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { SobreComponent } from './shared/pages/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
