import { Component, OnInit } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';
import { PoTableAction } from '@po-ui/ng-components';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})

export class ProductsListComponent implements OnInit {

  columns: Array<PoTableColumn> = [
    {
      property: 'id',
      label: 'Código',
      type: 'string'
    },
    {
      property: 'name',
      label: 'Descrição',
      type: 'string'
    },
    {
      property: 'codebar',
      label: 'Código de Barras',
      type: 'string'
    }
  ];

  items: Array<Object> = [
    {
      id: '000001',
      name: 'ARROZ BRANCO TIPO 1 5KG SEPE',
      codebar: '0123456789876'
    },
    {
      id: '000002',
      name: 'ARROZ BRANCO TIPO 1 2KG SEPE',
      codebar: '6789876543210'
    },
    {
      id: '000003',
      name: 'FEIJAO PRETO 1KG COLIBRI',
      codebar: '1597532846555'
    },
  ];

  actions: Array<PoTableAction> = [
    {
      icon: 'po-icon-eye',
      label: 'Visualizar'
    },
    {
      icon: 'po-icon-edit',
      label: 'Editar'
    }
];

  constructor() { }

  ngOnInit() {}

}
