import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../guards/auth-guard.service";
import { ChannelComponent } from "./channel/channel.component";
import { dashboardRoutes } from "./dashboard.routes";
import { LayoutComponent } from "./layout/layout.component";
import { RoomComponent } from "./room/room.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from "../shared/shared.module";
import { SpinnerComponent } from "../shared/spinner.component";

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: [LayoutComponent, UserComponent, RoomComponent, ChannelComponent, HeaderComponent, SidebarComponent,SpinnerComponent],
})
export class DashboardModule { }