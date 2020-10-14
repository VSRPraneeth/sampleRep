import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBComponent } from '../list-b/list-b.component';
import { ListBChildComponent } from '../list-b-child/list-b-child.component';
import { ListBChild1Component } from '../list-b-child1/list-b-child1.component';

const routes: Routes = [
  {
    path: '',
    component: ListBComponent,
    children: [
      { path: 'ListBChildComponent', component: ListBChildComponent },
      { path: 'ListBChild1Component', component: ListBChild1Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBRoutingModule {}

export const routingComponentsB = [ListBChildComponent, ListBChild1Component];
