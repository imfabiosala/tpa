import { Component, OnInit } from '@angular/core';

import { PoPageLoginLiterals } from '@po-ui/ng-templates';
import { PoLanguage } from '@po-ui/ng-components';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  literals: PoPageLoginLiterals = {
    welcome: 'Bem Vindo(a)',
    loginHint: '',
    loginPlaceholder: 'Insira o seu usuário',
    passwordPlaceholder: 'Insira a sua senha'
  };

  languages: Array<PoLanguage> = [];

  constructor() { }

  ngOnInit() {}

}
