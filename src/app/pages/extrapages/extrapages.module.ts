import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarouselModule } from "primeng/carousel";
// Google Map
import { GoogleMapsModule } from '@angular/google-maps';
import { AccordionModule } from 'primeng/accordion';

// Page Route
import { ExtraPagesRoutingModule } from "./extrapages-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
// Load Icons
import { defineElement } from "@lordicon/element";;
import lottie from "lottie-web";

// simplebar
import { SimplebarAngularModule } from "simplebar-angular";

// Component
import { ProductsCategoryComponent } from "./products-category/products-category.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { PurchaseGuideComponent } from "./purchase-guide/purchase-guide.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { StoreLocatorComponent } from "./store-locator/store-locator.component";
import { EcommerceFaqComponent } from "./ecommerce-faq/ecommerce-faq.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

@NgModule({
  declarations: [ProductsCategoryComponent, AboutUsComponent, PurchaseGuideComponent, TermsConditionsComponent, PrivacyPolicyComponent, StoreLocatorComponent, EcommerceFaqComponent, InvoiceComponent, ContactUsComponent],
  imports: [CommonModule, ExtraPagesRoutingModule, SharedModule, CarouselModule, SimplebarAngularModule, GoogleMapsModule, AccordionModule, LeafletModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExtrapagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
