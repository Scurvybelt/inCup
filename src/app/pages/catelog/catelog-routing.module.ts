import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductGridDefualtComponent } from "./product-grid-defualt/product-grid-defualt.component";
import { ProductGridRightComponent } from "./product-grid-right/product-grid-right.component";
import { ProductGridSidebarBannerComponent } from "./product-grid-sidebar-banner/product-grid-sidebar-banner.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { ProductListDefualtComponent } from "./product-list-defualt/product-list-defualt.component";
import { ProductListLeftComponent } from "./product-list-left/product-list-left.component";
import { ProductListRightComponent } from "./product-list-right/product-list-right.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  {
    path: "product-grid-sidebar-banner",
    component: ProductGridSidebarBannerComponent,
  },
  {
    path: "product-grid-right",
    component: ProductGridRightComponent,
  },
  {
    path: "product-list-left",
    component: ProductListLeftComponent,
  },
  {
    path: "product-list",
    component: ProductListComponent,
  },
  {
    path: "product-list-right",
    component: ProductListRightComponent,
  },
  {
    path: "product-list-defualt",
    component: ProductListDefualtComponent,
  },
  {
    path: "product-grid-defualt",
    component: ProductGridDefualtComponent,
  },
  {
    path: "product-grid",
    component: ProductGridComponent,
  },
  {
    path: "product-details",
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatelogRoutingModule { }
