import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFeather, faGears } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-description-boxes',
  imports: [TranslateModule, NgSwitch, NgSwitchCase, FontAwesomeModule],
  templateUrl: './description-boxes.component.html',
  styleUrl: './description-boxes.component.scss'
})
export class DescriptionBoxesComponent {
  currentSlideOfBox1 = 0;

  faFeather = faFeather;
  faGears = faGears;

  selectSlide(index: number) {
    this.currentSlideOfBox1 = index;
  }
}
