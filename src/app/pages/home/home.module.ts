import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index/index.component";

import { CarouselModule } from "primeng/carousel";
import { TooltipModule } from 'primeng/tooltip'
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';


// Route page
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

// Swiper Slider
// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WatchMainLayoutComponent } from './watch-main-layout/watch-main-layout.component';
import { ModernFashionComponent } from './modern-fashion/modern-fashion.component';
import { TrendFashionComponent } from './trend-fashion/trend-fashion.component';

@NgModule({
    declarations: [IndexComponent, WatchMainLayoutComponent, ModernFashionComponent, TrendFashionComponent],
    imports: [CommonModule, HomeRoutingModule, SharedModule, SlickCarouselModule, CarouselModule,TooltipModule,DialogModule,OverlayPanelModule],
})
export class HomeModule {}
