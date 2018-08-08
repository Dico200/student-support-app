import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hub-card',
  templateUrl: './hub-card.component.html',
  styleUrls: ['./hub-card.component.scss']
})
export class HubCardComponent implements OnInit {

  @Input()
  route: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigateByUrl(this.route);
  }

}
