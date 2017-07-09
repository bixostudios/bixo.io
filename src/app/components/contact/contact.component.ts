import { Component, HostBinding, OnInit } from '@angular/core';
import { routeSlideStateTrigger, routeFadeStateTrigger } from '../shared/route.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ routeFadeStateTrigger, routeSlideStateTrigger ]
})
export class ContactComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
