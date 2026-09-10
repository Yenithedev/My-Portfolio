import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() dark = true;
  @Output() toggleTheme = new EventEmitter<void>();

  onChangeBack() {
    this.toggleTheme.emit();
  }
}
