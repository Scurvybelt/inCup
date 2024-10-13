import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: "", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) },
    {
        path: "catelog",
        loadChildren: () => import("./catelog/catelog.module").then((m) => m.CatelogModule),
    },
    {
        path: "shop",
        loadChildren: () => import("./shop/shop.module").then((m) => m.ShopModule),
    },
    {
        path: "users",
        loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
    },
    {
        path: "extrapages",
        loadChildren: () => import("./extrapages/extrapages.module").then((m) => m.ExtrapagesModule),
    },
    {
        path: "email",
        loadChildren: () => import("./email/email.module").then((m) => m.EmailModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
