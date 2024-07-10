import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ServicesComponent } from '../services/services.component';
import { ServiceItemComponent } from '../service-item/service-item.component';
import { HeroComponent } from '../hero/hero.component';
import { OffersComponent } from '../offers/offers.component';
import { FounderComponent } from '../founder/founder.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ServiceItemComponent,
    OffersComponent,
    FounderComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ServiceItemComponent,
    OffersComponent,
    FounderComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
