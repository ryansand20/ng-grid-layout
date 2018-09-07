import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { GridItemWidthPipe } from './grid-item-width.pipe';
import { GridItemLeftPipe } from './grid-item-left.pipe';
import { GridItemHeightPipe } from './grid-item-height.pipe';
import { GridItemTopPipe } from './grid-item-top.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GridLayoutComponent,
    GridItemWidthPipe,
    GridItemLeftPipe,
    GridItemHeightPipe,
    GridItemTopPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
