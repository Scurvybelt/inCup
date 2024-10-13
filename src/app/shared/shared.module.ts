import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Primeng component
import { DropdownModule } from "primeng/dropdown";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { DialogModule } from "primeng/dialog";
import { SidebarModule } from "primeng/sidebar";
import { MegaMenuModule } from "primeng/megamenu";
import { MenubarModule } from "primeng/menubar";
import { AccordionModule } from 'primeng/accordion';

// simplebar
import { SimplebarAngularModule } from "simplebar-angular";

// Load Icons
import { defineElement } from "@lordicon/element";;
import lottie from "lottie-web";


// Component
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { DiscountFooterComponent } from "./discount-footer/discount-footer.component";
import { FeaturesComponent } from "./features/features.component";
import { LoginFooterComponent } from "./login-footer/login-footer.component";
import { LoginHeaderComponent } from "./login-header/login-header.component";
import { LanguageService } from "../core/services/language.service";
// Language
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, DiscountFooterComponent, FeaturesComponent, LoginFooterComponent, LoginHeaderComponent],
  imports: [
    CommonModule,
    SimplebarAngularModule,
    AccordionModule,
    DropdownModule,
    OverlayPanelModule,
    DialogModule,
    SidebarModule,
    MegaMenuModule,
    MenubarModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, DiscountFooterComponent, FeaturesComponent, LoginFooterComponent, LoginHeaderComponent],
  providers: [LanguageService],

})
export class SharedModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
