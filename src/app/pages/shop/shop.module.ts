import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DialogModule } from "primeng/dialog";
import { TabViewModule } from "primeng/tabview";

// Page Route
import { ShopRoutingModule } from "./shop-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

// Load Icons
import { defineElement } from "@lordicon/element";;
import lottie from "lottie-web";

import { NgxMasonryModule } from "ngx-masonry";

// Component
import { AddressComponent } from "./address/address.component";
import { TrackOrderComponent } from "./track-order/track-order.component";
import { PaymentComponent } from "./payment/payment.component";
import { ReviewComponent } from "./review/review.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { WishlistComponent } from "./wishlist/wishlist.component";

@NgModule({
  declarations: [AddressComponent, TrackOrderComponent, PaymentComponent, ReviewComponent, ConfirmationComponent, OrderHistoryComponent, ShopCartComponent, CheckoutComponent, WishlistComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule, DialogModule, FormsModule, ReactiveFormsModule, TabViewModule, NgxMasonryModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShopModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
