import { Component, OnInit } from '@angular/core';
import { AppRoutes, GhLink } from '../../app.constants';

@Component({
  selector: 'user-dash-topnav',
  templateUrl: './topnav.component.html',
  styles: [`
    @media screen and (max-width: 991px) {
        .navbar-brand {
            width: unset !important;
            padding-left: 1rem !important;
        }
    }
  `]
})
export class TopnavComponent implements OnInit {
  AppRoutes = AppRoutes;
  GhLink = GhLink;

  constructor() { }

  ngOnInit() {
  }

}
