import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Page Route
import { EmailRoutingModule } from "./email-routing.module";
import { BlackFridayComponent } from "./black-friday/black-friday.component";
import { FlashSaleComponent } from "./flash-sale/flash-sale.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { OrderSuccess2Component } from "./order-success2/order-success2.component";

@NgModule({
  declarations: [BlackFridayComponent, FlashSaleComponent, OrderSuccessComponent, OrderSuccess2Component],
  imports: [CommonModule, EmailRoutingModule],
})
export class EmailModule { }
