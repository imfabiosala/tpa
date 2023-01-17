import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'layout-page',
  templateUrl: './layout-page.component.html'
})

export class LayoutPageComponent implements OnInit {

  menu: Array<PoMenuItem> = [
    {
      label: 'Dashboard',
      shortLabel: 'Dashboard',
      icon: 'po-icon-chart-columns',
      link: 'dashboard'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
