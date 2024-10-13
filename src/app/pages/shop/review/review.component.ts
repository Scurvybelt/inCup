import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

// Data Get
import { reviewdata } from './data';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  reviews: any;

  ngOnInit(): void {

    document.documentElement.setAttribute('data-footer','light')
    /**
     * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Shop' },
      { label: 'Review', active: true }
    ];

    // Fetch Data
    this.reviews = reviewdata
  }

    /***
   * Masonry Option Function
   */
    public myOptions: NgxMasonryOptions = {
      horizontalOrder: true
    };

}
