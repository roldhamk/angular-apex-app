import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { TestComponent } from './test/test.component';
import { LegendsComponent } from './legends/legends.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'legends', component: LegendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
