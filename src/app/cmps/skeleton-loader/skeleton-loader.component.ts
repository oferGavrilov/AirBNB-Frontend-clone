import { Component } from '@angular/core';

@Component({
  selector: 'skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {

  items = Array(15).fill(0)
}
