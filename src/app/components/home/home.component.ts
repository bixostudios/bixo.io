import { routeSlideStateTrigger, routeFadeStateTrigger } from '../shared/route.animation';
import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class HomeComponent implements OnInit {
   @HostBinding('@routeFadeState') routeAnimation = true;
  //@HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
