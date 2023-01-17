import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutPageComponent } from './layout-page.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [LayoutPageComponent, DashboardComponent],
  imports: [CommonModule, RouterModule]
})

export class LayoutPageModule { }
