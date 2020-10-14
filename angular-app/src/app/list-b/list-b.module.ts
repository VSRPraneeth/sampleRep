import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ListBRoutingModule,
  routingComponentsB,
} from './list-b-routing.module';

@NgModule({
  declarations: [routingComponentsB],
  imports: [CommonModule, ListBRoutingModule],
})
export class ListBModule {}
