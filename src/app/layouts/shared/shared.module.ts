import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BottomNavigationBarComponent } from './bottom-navigation-bar/bottom-navigation-bar.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';

@NgModule({
  declarations: [TopNavigationBarComponent, BottomNavigationBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopNavigationBarComponent, BottomNavigationBarComponent],
})
export class SharedModule {}
