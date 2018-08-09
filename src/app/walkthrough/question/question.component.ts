import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {WalkthroughStackService} from '../walkthrough-stack.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input()
  routeYes: string;

  @Input()
  routeNo: string;

  constructor(private router: Router,
              private walkthroughStackService: WalkthroughStackService) {
  }

  onClickYes() {
    this.router.navigateByUrl(this.routeYes);
  }

  onClickNo() {
    /*
    If routeNo is not defined or empty, the stack will be checked for a route that was scheduled to be visited earlier.
     */
    this.walkthroughStackService.gotoRoute(this.routeNo);
  }

}
