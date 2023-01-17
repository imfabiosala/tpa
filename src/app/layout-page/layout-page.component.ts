import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { PoToolbarProfile } from '@po-ui/ng-components';
import { PoToolbarAction } from '@po-ui/ng-components';

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
    },
    {
      label: 'Produtos',
      shortLabel: 'Produtos',
      icon: 'po-icon-stock',
      link: 'products'
    }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://avatars.githubusercontent.com/u/109047244?v=4',
    subtitle: 'im@fabiosala.dev',
    title: 'Fábio Sala'
  };

  profileActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-user',
      label: 'Perfil'
    },
    {
      icon: 'po-icon-exit',
      label: 'Sair',
      type: 'danger',
      separator: true
    }
  ];

  constructor() { }

  ngOnInit() {}

}
