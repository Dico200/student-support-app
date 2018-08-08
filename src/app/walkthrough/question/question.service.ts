import {Injectable} from '@angular/core';


@Injectable()
export class QuestionService {
  private questions = {
    '': ''
  };

  public getQuestion(name: string): string {
    return this.questions[name];
  }

}
