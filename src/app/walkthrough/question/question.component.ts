import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {QuestionService} from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  private sub: Subscription; // The registered listener with the route
  question: string;

  constructor(private route: ActivatedRoute,
              private service: QuestionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.question = this.service.getQuestion(params['name']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
