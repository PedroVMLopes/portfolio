import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFigma, faReact, faGit, faNode, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faCode, faWater, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

export interface CurrentTechnologies {
  icon: IconDefinition;
  title: string;
  description: string;
}

@Component({
  selector: 'app-main-technologies',
  imports: [FontAwesomeModule, TranslateModule, NgFor],
  templateUrl: './main-technologies.component.html',
  styleUrl: './main-technologies.component.scss'
})
export class MainTechnologiesComponent {
  faGlobe = faGlobe;
  faFigma = faFigma;
  faCode = faCode;
  faReact = faReact;
  faWater = faWater;
  faGit = faGit;
  faDatabase = faDatabase;
  faNode = faNode;

  currentTech: CurrentTechnologies[] = [
    {
      icon: faGlobe,
      title: "Web Fundamentals",
      description: "HTML, CSS, JavaScript"
    },
    {
      icon: faFigma,
      title: "Figma",
      description: "Design Tool"
    },
    {
      icon: faCode,
      title: "TypeScript",
      description: "Programming Lenguage"
    },
    {
      icon: faReact,
      title: "React",
      description: "JavaScript Library"
    },
    {
      icon: faWater,
      title: "TailwindCSS",
      description: "CSS Framework"
    },
    {
      icon: faGit,
      title: "Git / GitHub",
      description: "Version Control"
    },
    {
      icon: faDatabase,
      title: "Supabase",
      description: "Database"
    },
    {
      icon: faNode,
      title: "Node.js",
      description: "Back-End Tool"
    },
  ]

}
