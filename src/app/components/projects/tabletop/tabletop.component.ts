import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPersonCirclePlus, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tabletop',
  imports: [FontAwesomeModule, TranslateModule, NgIf],
  templateUrl: './tabletop.component.html',
  styleUrl: './tabletop.component.scss'
})
export class TabletopComponent {
  faPersonCirclePlus = faPersonCirclePlus;
  faGithub = faGithub;
  faDiceD20 = faDiceD20;

  characterCreated = false;
  charRange1 = 0;
  charRange2 = 0;
  charRange3 = 0;
  charRange4 = 0;

  createCharacter() {
    this.characterCreated = false;
    setTimeout(() => {
      this.characterCreated = true;
      this.charRange1 = Math.floor(Math.random() * 101);
      this.charRange2 = Math.floor(Math.random() * 101);
      this.charRange3 = Math.floor(Math.random() * 101);
      this.charRange4 = Math.floor(Math.random() * 101);
    }, 1000);
  }
}
