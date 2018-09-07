import { Component } from '@angular/core';
import { GridItem } from './grid-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridItems: TestGridItem[];

  constructor() {
    this.gridItems = [
      new TestGridItem(0, 0, 1, 1),
      new TestGridItem(1, 0, 2, 1),
      new TestGridItem(0, 1, 1, 1),
      new TestGridItem(0, 2, 1, 1),
      new TestGridItem(1, 1, 2, 2),
      new TestGridItem(3, 5, 1, 1)
    ]
  }
}

export class TestGridItem implements GridItem {
  columnPosition: number;
  rowPosition: number;
  columnSpan: number;
  rowSpan: number;

  constructor(columnPosition: number, rowPosition: number, columnSpan: number, rowSpan: number) {
    this.columnPosition = columnPosition;
    this.rowPosition = rowPosition;
    this.columnSpan = columnSpan;
    this.rowSpan = rowSpan;
  }
}