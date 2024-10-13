import { Component } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent {

    // bread crumb items
  breadCrumbItems!: Array<{}>;
  
  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Shop' },
      { label: 'Track Order', active: true }
    ];
  }
}
