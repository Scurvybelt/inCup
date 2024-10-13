import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressComponent } from "./address/address.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { PaymentComponent } from "./payment/payment.component";
import { ReviewComponent } from "./review/review.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";
import { TrackOrderComponent } from "./track-order/track-order.component";
import { WishlistComponent } from "./wishlist/wishlist.component";

const routes: Routes = [
  {
    path: "address",
    component: AddressComponent,
  },
  {
    path: "track-order",
    component: TrackOrderComponent,
  },
  {
    path: "payment",
    component: PaymentComponent,
  },
  {
    path: "review",
    component: ReviewComponent,
  },
  {
    path: "confirmation",
    component: ConfirmationComponent,
  },
  {
    path: "order-history",
    component: OrderHistoryComponent,
  },
  {
    path: "shop-cart",
    component: ShopCartComponent,
  },
  {
    path: "checkout",
    component: CheckoutComponent,
  },
  {
    path: "wishlist",
    component: WishlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule { }
