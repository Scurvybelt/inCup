import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { EcommerceFaqComponent } from "./ecommerce-faq/ecommerce-faq.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

// Component
import { ProductsCategoryComponent } from "./products-category/products-category.component";
import { PurchaseGuideComponent } from "./purchase-guide/purchase-guide.component";
import { StoreLocatorComponent } from "./store-locator/store-locator.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";

const routes: Routes = [
    {
        path: "products-category",
        component: ProductsCategoryComponent,
    },
    {
        path: "about-us",
        component: AboutUsComponent,
    },
    {
        path: "purchase-guide",
        component: PurchaseGuideComponent,
    },
    {
        path: "terms-conditions",
        component: TermsConditionsComponent,
    },
    {
        path: "privacy-policy",
        component: PrivacyPolicyComponent,
    },
    {
        path: "store-locator",
        component: StoreLocatorComponent,
    },
    {
        path: "ecommerce-faq",
        component: EcommerceFaqComponent,
    },
    {
        path: "invoice",
        component: InvoiceComponent,
    },
    {
        path: "contact-us",
        component: ContactUsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExtraPagesRoutingModule {}
