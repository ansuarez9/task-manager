import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  template: `
  <div class="navbar ui-g">
    <div class="navTitle ui-g-4">Job Applications Tasks Manager</div>
    <div class="ui-g-8">
      <ul class="navMenu">
        <li><a routerLink="/dashboard" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/company" routerLinkActive="active">Companies</a></li>
        <li><a routerLink="/position" routerLinkActive="active">Positions</a></li>
        <!-- <li><a routerLink="/dashboard" routerLinkActive="active">Tasks</a></li> -->
      </ul>
    </div>
  </div>
  `,
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
