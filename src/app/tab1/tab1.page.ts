import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import FULL_MOON from '/src/assets/img/fullmoon.png';
import FIRST_QUARTER from '/src/assets/img/firstquarter.png';
import NEW_MOON from '/src/assets/img/newmoon.png';
import THIRD_QUARTER from '/src/assets/img/thirdquarter.png';
import { translations } from '../constants';

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
    this.filteredData.length = 0;
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

    values.forEach(moon => {
      moon.data[0].moonPhase.closest.text = translations.get(moon.data[0].moonPhase.closest.text);
      moon.phaseName = moon.data[0].moonPhase.closest.text;
      moon.phaseImg = this.selectImg(moon.phaseName);
      moon.phaseTime = moon.data[0].moonPhase.closest.time;
    })

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
      case 'Luna llena':
        return FULL_MOON;
      case 'Third quarter':
      case 'Cuarto menguante':
        return THIRD_QUARTER;
      case 'First quarter':
      case 'Cuarto creciente':
        return FIRST_QUARTER;
      case 'New moon':
      case 'Luna nueva':
        return NEW_MOON;
      default:
        return FULL_MOON;
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
