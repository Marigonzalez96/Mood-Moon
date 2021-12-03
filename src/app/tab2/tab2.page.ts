import { Component } from '@angular/core';
import FULL_MOON from '/src/assets/img/fullmoon.png';
import FIRST_QUARTER from '/src/assets/img/firstquarter.png';
import NEW_MOON from '/src/assets/img/newmoon.png';
import THIRD_QUARTER from '/src/assets/img/thirdquarter.png';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  date = '2021/08/22';
  selectedPhase;
  selectedPhaseImg;
  showAnimation = false;
  translations = new Map([
    ['Full moon', 'Luna llena'],
    ['First quarter', 'Cuarto creciente'],
    ['New moon', 'Luna nueva'],
    ['Third quarter', 'Cuarto menguante'],
  ]);

  changeDate(selectedDate) {
    const latRanchos = 35.51725;
    const lngRanchos = 58.308743;

    const jsonData = localStorage.getItem(selectedDate);
    const savedDate = JSON.parse(jsonData);

    if (savedDate) {
      this.selectedPhase = this.translations.get(
        savedDate.data[0].moonPhase.closest.text
      );
      this.selectImg(this.selectedPhase);
      this.showAnimation = true;
      this.removeAnimation();
    } else {
      fetch(
        `https://api.stormglass.io/v2/astronomy/point?lat=${latRanchos}&lng=${lngRanchos}&start=${selectedDate}`,
        {
          headers: {
            Authorization:
              '57a2b6b0-0b2d-11ec-8a89-0242ac130002-57a2b728-0b2d-11ec-8a89-0242ac130002',
          },
        }
      )
        .then((response) => response.json())
        .then((jsonData) => {
          const jsonString = JSON.stringify(jsonData);
          localStorage.setItem(selectedDate, jsonString);
          this.selectedPhase = this.translations.get(
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
