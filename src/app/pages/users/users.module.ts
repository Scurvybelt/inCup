import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Page Route
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

import { TabViewModule } from "primeng/tabview";
 
// Component
import { AccountComponent } from "./account/account.component";

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule, TabViewModule],
})
export class UsersModule { }
