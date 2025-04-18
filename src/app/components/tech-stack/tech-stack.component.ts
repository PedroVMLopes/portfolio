import { Component } from '@angular/core';

interface Technology {
  name: string;
  categories: string[];
}

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  technologies: Technology[] = [
    { name: 'Angular', categories: ['Front-End', 'Framework']},
    { name: 'JavaScript', categories: ['Front-End']}
  ]

}
