import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [],
})
export class LayoutPageComponent {
  public sideBarItems = [
    { label: 'Heroes', icon: 'label', url: './list' },
    { label: 'Add Hero', icon: 'add', url: './new-hero' },
    { label: 'Search', icon: 'search', url: './search' },
  ];
}
