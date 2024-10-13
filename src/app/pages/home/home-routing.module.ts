import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Component
import { IndexComponent } from "./index/index.component";
import { WatchMainLayoutComponent } from "./watch-main-layout/watch-main-layout.component";
import { ModernFashionComponent } from "./modern-fashion/modern-fashion.component";
import { TrendFashionComponent } from "./trend-fashion/trend-fashion.component";

const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "watch-main-layout",
        component: WatchMainLayoutComponent,
    },
    {
        path: "modern-fashion",
        component: ModernFashionComponent,
    },
    {
        path: "trend-fashion",
        component: TrendFashionComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
