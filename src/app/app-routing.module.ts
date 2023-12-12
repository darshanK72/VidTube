import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './Layout/body/body.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'video',
    component:VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
