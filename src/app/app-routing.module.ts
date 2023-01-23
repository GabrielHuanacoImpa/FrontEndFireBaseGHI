import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{path: 'porfolio', component:AppComponent},
  //{path: '', redirectTo:'porfolio',pathMatch:'full'}
  {path: '', component:AppComponent},
  {path: '', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
