import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PreviewComponent } from './components/preview/preview.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotoFormComponent,
    PreviewComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
