import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThankYouComponent } from '../thank-you/thank-you.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ThankYouComponent,
    });
    return await modal.present();
  }
}
