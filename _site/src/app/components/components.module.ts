import { BagStatusComponent } from './bag-status/bag-status.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LandingTimelineComponent } from './landing-timeline/landing-timeline.component';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { ReviewsComponent } from './reviews/reviews.component';
import { SafePipe } from '../safe.pipe';

const components = [
  MapComponent,
  LandingTimelineComponent,
  BagStatusComponent,
  ReviewsComponent,
  HeaderComponent,
];

@NgModule({
  declarations: [...components, SafePipe],
  imports: [CommonModule, FormsModule, NgxAnimatedCounterModule],
  exports: [...components],
})
export class ComponentsModule {}
