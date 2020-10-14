import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAComponent } from './list-a/list-a.component';
import { ListBComponent } from './list-b/list-b.component';
import { ListAModule } from './list-a/list-a.module';
import { ListBModule } from './list-b/list-b.module';

const routes: Routes = [
  {
    path: 'listA',
    loadChildren: './list-a/list-a.module#ListAModule',
    // component: ListAComponent,
    // children: [
    //   { path: 'ListAChildComponent', component: ListAChildComponent },
    //   { path: 'ListAChild1Component', component: ListAChild1Component },
    // ],
  },
  {
    path: 'listB',
    loadChildren: './list-b/list-b.module#ListBModule',
    // component: ListBComponent,
    // children: [
    //   { path: 'ListBChildComponent', component: ListBChildComponent },
    //   { path: 'ListBChild1Component', component: ListBChild1Component },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ListAComponent, ListBComponent];
