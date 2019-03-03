import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
