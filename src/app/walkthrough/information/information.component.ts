import {Component, Input} from '@angular/core';
import {WalkthroughStackService} from '../walkthrough-stack.service';

/**
 * This component can be used on a page to embed textual content
 * in an area with a Continue button underneath, with consistent styling.
 */
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input()
  nextRoute: string;

  constructor(private walkthroughStackService: WalkthroughStackService) {
  }

  onClickNext() {
    /*
    If nextRoute is not defined or empty, the stack will be checked for a route that was scheduled to be visited earlier.
     */
    this.walkthroughStackService.gotoRoute(this.nextRoute);
  }

}
