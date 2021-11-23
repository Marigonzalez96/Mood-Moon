import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data=[];
  filteredData = [];
  constructor(public modalController: ModalController) {

  }  
  ionViewWillEnter() {
    this.data=this.allStorage();
    this.filteredData = JSON.parse(JSON.stringify(this.data))
  }

  allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }

    return values;
}

  filter(fase) {
    this.filteredData= this.data.filter(value => {
      return value.data[0].moonPhase.closest.text.toLowerCase().includes(fase.toLowerCase());
    });
  }

  selectImg(phase){
    switch (phase) {
      case 'Full moon':
      return '../../assets/img/fullmoon.png';
        break;
      case 'Third quarter':
      return '../../assets/img/thirdquarter.png';
        break;
      case 'First quarter':
      return '../../assets/img/firstquarter.png';
        break;
      case 'New moon':
      return '../../assets/img/newmoon.png';
        break;
      default:
      return '../../assets/img/fullmoon.png';
    }
  }

  async presentModal(moon) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        selectedPhaseImg: this.selectImg(moon.data[0].moonPhase.closest.text)
      }
    });
    return await modal.present();
  }

}

@Component({
  selector: 'modal-page',
  templateUrl: 'modal.html',
})
export class ModalPage {
  @Input() selectedPhaseImg;
  constructor() {}

}