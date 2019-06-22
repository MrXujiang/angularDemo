import { NgModule } from '@angular/core';
import { MatButtonModule, MatTooltipModule, MatBadgeModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTooltipModule, MatBadgeModule],
  exports: [MatButtonModule, MatTooltipModule, MatBadgeModule],
})
export class CustomMaterialModule { }