import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { LayoutPageComponent } from './layout-page.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [LayoutPageComponent, DashboardComponent],
  imports: [CommonModule, RouterModule, PoModule, PoTemplatesModule]
})

export class LayoutPageModule { }
