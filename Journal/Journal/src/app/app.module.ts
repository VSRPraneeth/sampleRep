import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridModule, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalViewerComponent } from './ejs-grid/journal-viewer/journal-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, GridModule
  ],
  providers: [PageService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
