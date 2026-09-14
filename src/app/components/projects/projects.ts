import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  @Input() dark = true;

  activeModal: string | null = null;

  openModal(project: string) {
    this.activeModal = project;
  }

  closeModal() {
    this.activeModal = null;
  }
}