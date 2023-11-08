import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [PublicLayoutComponent, DefaultLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [PublicLayoutComponent, DefaultLayoutComponent],
})
export class LayoutsModule {}
