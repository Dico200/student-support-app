import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  onClickYes() {
    this.router.navigateByUrl(this.routeYes);
  }

  onClickNo() {
    this.router.navigateByUrl(this.routeNo);
  }

}
