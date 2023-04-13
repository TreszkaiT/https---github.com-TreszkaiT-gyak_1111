import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigPageRoutingModule } from './config-page-routing.module';
import { SharedModule } from 'src/app/modul/common';
import { ConfigPageComponent } from './component/config/config-page.component';


@NgModule({
  declarations: [
    ConfigPageComponent
  ],
  imports: [
    CommonModule,
    ConfigPageRoutingModule,
    SharedModule
  ]
})
export class ConfigPageModule { }
