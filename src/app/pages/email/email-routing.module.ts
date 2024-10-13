import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlackFridayComponent } from "./black-friday/black-friday.component";
import { FlashSaleComponent } from "./flash-sale/flash-sale.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { OrderSuccess2Component } from "./order-success2/order-success2.component";

const routes: Routes = [
    {
        path: "black-friday",
        component: BlackFridayComponent,
    },
    {
        path: "flash-sale",
        component: FlashSaleComponent,
    },
    {
        path: "order-success",
        component: OrderSuccessComponent,
    },
    {
        path: "order-success-2",
        component: OrderSuccess2Component,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmailRoutingModule {}
