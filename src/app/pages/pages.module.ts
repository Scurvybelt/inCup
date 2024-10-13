import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from "primeng/carousel";
import { AccordionModule } from 'primeng/accordion';

// Page Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule, SharedModule, CarouselModule, AccordionModule],
})
export class PagesModule { }
