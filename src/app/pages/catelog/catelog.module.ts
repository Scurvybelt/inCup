import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaginatorModule } from "primeng/paginator";
import { AccordionModule } from "primeng/accordion";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { TableModule } from "primeng/table";
import { DataViewModule } from "primeng/dataview";
import { TabViewModule } from "primeng/tabview";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { CheckboxModule } from "primeng/checkbox";
// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

// simplebar
import { SimplebarAngularModule } from "simplebar-angular";

// Page Route
import { CatelogRoutingModule } from "./catelog-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

// Component
import { ProductGridSidebarBannerComponent } from "./product-grid-sidebar-banner/product-grid-sidebar-banner.component";
import { ProductGridRightComponent } from "./product-grid-right/product-grid-right.component";
import { ProductListLeftComponent } from "./product-list-left/product-list-left.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListRightComponent } from "./product-list-right/product-list-right.component";
import { ProductListDefualtComponent } from "./product-list-defualt/product-list-defualt.component";
import { ProductGridDefualtComponent } from "./product-grid-defualt/product-grid-defualt.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  declarations: [
    ProductGridSidebarBannerComponent,
    ProductGridRightComponent,
    ProductListLeftComponent,
    ProductListComponent,
    ProductListRightComponent,
    ProductListDefualtComponent,
    ProductGridDefualtComponent,
    ProductGridComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    CatelogRoutingModule,
    SharedModule,
    PaginatorModule,
    AccordionModule,
    SliderModule,
    MultiSelectModule,
    DataViewModule,
    TableModule,
    SlickCarouselModule,
    TabViewModule,
    SimplebarAngularModule,
    OverlayPanelModule,
    CheckboxModule,
  ],
})
export class CatelogModule { }
