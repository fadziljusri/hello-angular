import { Component, OnInit } from '@angular/core';
import { AppRoutes, GhLink } from '../../app.constants';

@Component({
  selector: 'user-dash-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {
  AppRoutes = AppRoutes;
  GhLink = GhLink;

  constructor() { }

  ngOnInit() {
  }

}
