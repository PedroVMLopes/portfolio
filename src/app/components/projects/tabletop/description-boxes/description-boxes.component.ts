import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-description-boxes',
  imports: [TranslateModule, NgSwitch, NgSwitchCase],
  templateUrl: './description-boxes.component.html',
  styleUrl: './description-boxes.component.scss'
})
export class DescriptionBoxesComponent {
  currentSlideOfBox1 = 0;

  selectSlide(index: number) {
    this.currentSlideOfBox1 = index;
  }
}
