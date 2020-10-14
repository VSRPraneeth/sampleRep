import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ListARoutingModule,
  routingComponentsA,
} from './list-a-routing.module';

@NgModule({
  declarations: [routingComponentsA],
  imports: [CommonModule, ListARoutingModule],
})
export class ListAModule {}
