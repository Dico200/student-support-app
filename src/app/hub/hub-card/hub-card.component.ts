import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {WalkthroughStackService} from '../../walkthrough/walkthrough-stack.service';

@Component({
  selector: 'app-hub-card',
  templateUrl: './hub-card.component.html',
  styleUrls: ['./hub-card.component.scss']
})
export class HubCardComponent {

  @Input()
  route: string;

  /*
  This route is pushed onto the WalkthroughStackService.
  When the selected route ends, this one is invoked instead of returning to the hub.
   */
  @Input()
  nextRoute: string;

  constructor(private router: Router,
              private walkthroughStackService: WalkthroughStackService) {
  }

  onClick() {
    if (this.nextRoute) {
      this.walkthroughStackService.push(this.nextRoute);
    }

    this.router.navigateByUrl(this.route);
  }

}
