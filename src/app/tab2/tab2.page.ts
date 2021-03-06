import { Component } from '@angular/core';
import FULL_MOON from '/src/assets/img/fullmoon.png';
import FIRST_QUARTER from '/src/assets/img/firstquarter.png';
import NEW_MOON from '/src/assets/img/newmoon.png';
import THIRD_QUARTER from '/src/assets/img/thirdquarter.png';
import { translations } from '../constants';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  date = new Date().toISOString();
  selectedPhase;
  selectedPhaseImg;
  showAnimation = false;

  ionViewWillEnter() {
    const today = new Date().toISOString()
    console.debug("la fecha de hoy",today)
    this.changeDate(today)
  }

  changeDate(selectedDate) {
    console.debug("la fecha seleccionada", selectedDate)
    const latRanchos = 35.51725;
    const lngRanchos = 58.308743;

    const jsonData = localStorage.getItem(selectedDate);
    const savedDate = JSON.parse(jsonData);

    if (savedDate) {
      this.selectedPhase = translations.get(
        savedDate.data[0].moonPhase.closest.text
      );
      this.selectImg(this.selectedPhase);
      this.showAnimation = true;
      this.removeAnimation();
    } else {
      const date = new Date(selectedDate);
      date.setHours(0,0,0,0) 
      fetch(
        `https://api.stormglass.io/v2/astronomy/point?lat=${latRanchos}&lng=${lngRanchos}&start=${date.toISOString()}&end=${date.toISOString()}`,
        {
          headers: {
            Authorization:
              '57a2b6b0-0b2d-11ec-8a89-0242ac130002-57a2b728-0b2d-11ec-8a89-0242ac130002',
          },
        }
      )
        .then((response) => response.json())
        .then((jsonData) => {
          if (jsonData.errors) {
            return; 
          }
          const jsonString = JSON.stringify(jsonData);
          localStorage.setItem(selectedDate, jsonString);
          this.selectedPhase = translations.get(
            jsonData.data[0].moonPhase.closest.text
          );
          this.selectImg(this.selectedPhase);
          this.showAnimation = true;
          this.removeAnimation();
        });
    }
  }
  selectImg(phase) {
    switch (phase) {
      case 'Luna llena':
        this.selectedPhaseImg = FULL_MOON;
        break;
      case 'Cuarto menguante':
        this.selectedPhaseImg = THIRD_QUARTER;
        break;
      case 'Cuarto creciente':
        this.selectedPhaseImg = FIRST_QUARTER;
        break;
      case 'Luna nueva':
        this.selectedPhaseImg = NEW_MOON;
        break;
      default:
        this.selectedPhaseImg = FULL_MOON;
    }
  }

  removeAnimation() {
    setTimeout(() => {
      this.showAnimation = false;
    }, 3000);
  }
}
