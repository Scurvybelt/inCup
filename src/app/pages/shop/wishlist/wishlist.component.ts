import { Component } from '@angular/core';

// Data Get
import { wishlistdata } from './data';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  wishlists: any;

  ngOnInit(): void {
    /**
     * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Shop' },
      { label: 'Wishlist', active: true }
    ];

    // Fetch Data
    this.wishlists = wishlistdata
  }


  // Remove From Wishlist
  removewishlist(id: any) {
    this.wishlists.splice(id, 1)
  }
}
