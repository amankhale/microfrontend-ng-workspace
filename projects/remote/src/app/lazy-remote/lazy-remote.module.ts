import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRemoteRoutingModule } from './lazy-remote-routing.module';
import { NavbarComponent } from './pages/navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LazyRemoteRoutingModule
  ]
})
export class LazyRemoteModule { }
