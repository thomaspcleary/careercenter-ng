import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleSeekerMenu = false;

  onSeekerToggleMenu() {
    if (this.toggleSeekerMenu === true) {
      this.toggleSeekerMenu = false;
    } else {
      this.toggleSeekerMenu = true;
    }
  }
  toggleEmployerMenu = false;

  onEmployerToggleMenu() {
    if (this.toggleEmployerMenu === true) {
      this.toggleEmployerMenu = false;
    } else {
      this.toggleEmployerMenu = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
