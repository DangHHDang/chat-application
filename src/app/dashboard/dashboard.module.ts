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
import { CreateUserComponent } from './user/create/create-user.component';
import { CreateRoomComponent } from './room/create-room/create-room.component';
import { CreateChannelComponent } from './channel/create-channel/create-channel.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';
import { EditChannelComponent } from './channel/edit-channel/edit-channel.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SpinnerComponent } from "../shared/spinner.component";
import { SpinnerInterceptorService } from "../core/services/spinner/spinner-interceptor.service";
import { ToastrModule } from "ngx-toastr";
import { AuthInterceptorService } from "src/services/authInterceptor.service";

@NgModule({
  
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(dashboardRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
     },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true },
  ],
  declarations: [SpinnerComponent,LayoutComponent, UserComponent, RoomComponent, ChannelComponent, HeaderComponent, SidebarComponent, CreateUserComponent, CreateRoomComponent, CreateChannelComponent, EditUserComponent, EditRoomComponent, EditChannelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class DashboardModule { }