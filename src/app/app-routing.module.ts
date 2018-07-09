import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionComponent } from './accordion/accordion.component';

const routes: Routes = [
  { path: '', redirectTo: '/accordion', pathMatch: 'full' },
  { path: 'accordion', component: AccordionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
