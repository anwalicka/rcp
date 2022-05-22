import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MainComponent } from './shared/main/main.component';
import { TaskComponent } from './views/task/task.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { ViewWrapperComponent } from './view-wrapper/view-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    TaskComponent,
    AppWrapperComponent,
    ViewWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
