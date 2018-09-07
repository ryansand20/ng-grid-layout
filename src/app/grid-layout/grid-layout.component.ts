import { Component, OnInit, Input } from '@angular/core';
import { GridItem } from '../grid-item';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css']
})
export class GridLayoutComponent {
  @Input() gridColumns: number;
  @Input() gridRows: number;
  @Input() gridRowHeightPixels: number;
  @Input() gridItems: GridItem[];
}
