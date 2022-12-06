import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { CreateUserComponent } from './user/create/create-user.component';
import { CreateRoomComponent } from './room/create-room/create-room.component';
import { CreateChannelComponent } from './channel/create-channel/create-channel.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    AuthGuard
  ],
  declarations: [LayoutComponent, UserComponent, RoomComponent, ChannelComponent, HeaderComponent, SidebarComponent,SpinnerComponent, CreateUserComponent, CreateRoomComponent, CreateChannelComponent, EditUserComponent, EditRoomComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class DashboardModule { }