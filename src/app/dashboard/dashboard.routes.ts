import { Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth-guard.service";
import { ChannelComponent } from "./channel/channel.component";
import { LayoutComponent } from "./layout/layout.component";
import { RoomComponent } from "./room/room.component";
import { UserComponent } from "./user/user.component";

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'users', component: UserComponent},
      { path: 'rooms', component: RoomComponent},
      { path: 'channels', component: ChannelComponent}
    ]
  }
];
