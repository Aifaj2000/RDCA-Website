import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocietyRoutingModule } from './society-routing.module';
import { SocietyComponent } from './society.component';

import { AboutSocityComponent } from './about-socity/about-socity.component';
import { InfrastructurComponent } from './infrastructur/infrastructur.component';
import { HistortSocietyComponent } from './histort-society/histort-society.component';
import { RouterModule, Routes } from '@angular/router';
import { VissionSocietyComponent } from './vission-society/vission-society.component';


const routes: Routes = [
  {
    path: '',
    component: SocietyComponent
  }
];

@NgModule({
  declarations: [
    SocietyComponent,
   
    AboutSocityComponent,
    InfrastructurComponent,
    HistortSocietyComponent,
    VissionSocietyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    //SocietyRoutingModule
  ]
})
export class SocietyModule { }
