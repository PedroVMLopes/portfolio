import { NgSwitch, NgSwitchCase, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFeather, faGears } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

export interface Technologies {
  name: string;
  function: string;
  description: string;
}

@Component({
  selector: 'app-description-boxes',
  imports: [TranslateModule, NgSwitch, NgSwitchCase, NgFor ,FontAwesomeModule],
  templateUrl: './description-boxes.component.html',
  styleUrl: './description-boxes.component.scss'
})

export class DescriptionBoxesComponent {
  currentSlideOfBox1 = 0;

  faFeather = faFeather;
  faGears = faGears;

  technologies: Technologies[] = [
    {
      name: "React",
      function: "tabletop.descriptionBoxes.toolsUsed.ReactFunc",
      description: "tabletop.descriptionBoxes.toolsUsed.ReactDesc"
    },
    {
      name: "JavaScript",
      function: "tabletop.descriptionBoxes.toolsUsed.JSFunc",
      description: "tabletop.descriptionBoxes.toolsUsed.JSDesc"
    },
    {
      name: "Electron",
      function: "tabletop.descriptionBoxes.toolsUsed.ElectronFunc",
      description: "tabletop.descriptionBoxes.toolsUsed.ElectronDesc"
    },
    {
      name: "TailwindCSS",
      function: "tabletop.descriptionBoxes.toolsUsed.TailwindFunc",
      description: "tabletop.descriptionBoxes.toolsUsed.TailwindDesc"
    },
    {
      name: "LocalStorage",
      function: "tabletop.descriptionBoxes.toolsUsed.LocalStorageFunc",
      description: "tabletop.descriptionBoxes.toolsUsed.LocalStorageDesc"
    },
  ]

  selectSlide(index: number) {
    this.currentSlideOfBox1 = index;
  }
}


