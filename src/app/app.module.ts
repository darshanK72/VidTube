import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Layout/header/header.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { BodyComponent } from './Layout/body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoPageComponent } from './Layout/video-page/video-page.component';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    DashboardComponent,
    VideoPageComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
