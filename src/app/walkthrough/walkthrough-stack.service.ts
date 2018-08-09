import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class WalkthroughStackService {
  private stack: string[] = [];

  constructor(private router: Router) {
  }

  public gotoRoute(route: string) {
    route = route || this.stack.pop() || '/index';
    this.router.navigateByUrl(route);
  }

  public push(route: string) {
    this.stack.push(route);
  }

}
