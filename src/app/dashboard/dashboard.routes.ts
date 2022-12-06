import { Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth-guard.service";
import { ChannelComponent } from "./channel/channel.component";
import { CreateChannelComponent } from "./channel/create-channel/create-channel.component";
import { EditChannelComponent } from "./channel/edit-channel/edit-channel.component";
import { LayoutComponent } from "./layout/layout.component";
import { CreateRoomComponent } from "./room/create-room/create-room.component";
import { EditRoomComponent } from "./room/edit-room/edit-room.component";
import { RoomComponent } from "./room/room.component";
import { CreateUserComponent } from "./user/create/create-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { UserComponent } from "./user/user.component";

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      // User
      {
        path: 'users',
        component: UserComponent,
      },
      {
        path: 'users/create',
        component: CreateUserComponent
      },
      {
        path: 'users/edit/:id',
        component: EditUserComponent
      },
      // room
      { 
        path: 'rooms', 
        component: RoomComponent 
      },
      {
        path: 'rooms/create',
        component: CreateRoomComponent
      },
      {
        path: 'rooms/edit/:id',
        component: EditRoomComponent
      },
      //Channel
      { 
        path: 'channels', 
        component: ChannelComponent 
      },
      {
        path: 'channels/create',
        component: CreateChannelComponent
      },
      {
        path: 'channels/edit/:id',
        component: EditChannelComponent
      },
    ]
  }
];
