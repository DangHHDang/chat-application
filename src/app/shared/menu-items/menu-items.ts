import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'users', name: 'Users', type: 'link', icon: 'portrait' },
  { state: 'rooms', type: 'link', name: 'Room', icon: 'room' },
  { state: 'channels', type: 'link', name: 'Chanel', icon: 'forum' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
