import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  data = [];
  filteredData = [];

  constructor(public modalController: ModalController) {}

  ionViewWillEnter() {
    this.data = this.getAllStorage();
    this.filteredData = JSON.parse(JSON.stringify(this.data));
  }

  getAllStorage() {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      if (Date.parse(keys[i]) > 0) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
      }
    }

    return values;
  }

  filter(evento) {
    const fase = evento.detail.value;
    this.filteredData = this.data.filter((value) =>
      value.data[0].moonPhase.closest.text
        .toLowerCase()
        .includes(fase.toLowerCase())
    );
  }

  selectImg(phase) {
    switch (phase) {
      case 'Full moon':
        return '/assets/img/fullmoon.png';
      case 'Third quarter':
        return '/assets/img/thirdquarter.png';
      case 'First quarter':
        return '/assets/img/firstquarter.png';
      case 'New moon':
        return '/assets/img/newmoon.png';
      default:
        return '/assets/img/fullmoon.png';
    }
  }

  async presentModal(moon) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        selectedPhaseImg: this.selectImg(moon.data[0].moonPhase.closest.text),
        phaseName: moon.data[0].moonPhase.closest.text,
      },
    });
    return await modal.present();
  }
}

@Component({
  selector: 'modal-page',
  templateUrl: 'modal.html',
  styleUrls: ['./tab1.page.scss'],
})
export class ModalPage {
  @Input() selectedPhaseImg;
  @Input() phaseName;
  constructor() {}
}
