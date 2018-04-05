import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  template: `
  <div class="navbar ui-g">
    <div class="navTitle ui-g-4">Job Applications Tasks Manager</div>
    <div class="ui-g-8">
      <ul class="navMenu">
        <li>Home</li>
        <li>Companies</li>
        <li>Positions</li>
        <li>Tasks</li>
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
