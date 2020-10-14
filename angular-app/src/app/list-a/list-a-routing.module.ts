import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAComponent } from '../list-a/list-a.component';
import { ListAChildComponent } from '../list-a-child/list-a-child.component';
import { ListAChild1Component } from '../list-a-child1/list-a-child1.component';

const routes: Routes = [
  {
    path: '',
    component: ListAComponent,
    children: [
      { path: 'ListAChildComponent', component: ListAChildComponent },
      { path: 'ListAChild1Component', component: ListAChild1Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListARoutingModule {}
export const routingComponentsA = [ListAChildComponent, ListAChild1Component];
