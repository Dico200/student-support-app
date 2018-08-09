import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

/*
This little service is from https://blog.hackages.io/our-solution-to-get-a-previous-route-with-angular-5-601c16621cf0
It stores the history of the router, even if it is used in a way that skips changing the window location.

I expanded the capability of this class a considerable amount by myself.
 */
@Injectable()
export class HistoryService {
  /*
  A stack of routes that were visited.
  Initialized with a route to index, so that pressing back will not create an error
  right after you load the application.
   */
  private _history: string[] = ['/index'];
  /*
  Current index in  history stack. The element at this index represents the current route of the application.
   */
  private _curIdx: number = 0;
  /*
  Used to avoid pushing an element onto the stack when using the back button.
   */
  private _ignoreEvent: boolean = false;

  constructor(private router: Router) {
  }

  public loadRouting(): void {
    this.router.events
    // Filter the events published by the router appropriately.
      .pipe(filter(event => event instanceof NavigationEnd && !this._ignoreEvent))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        if (this._curIdx < this._history.length - 1) {
          this._history = this._history.slice(0, this._curIdx + 1);
        }

        this._history.push(urlAfterRedirects);
        this._curIdx++;
      });
  }

  get history(): string[] {
    return this._history;
  }

  get previousUrl(): string {
    return this._history[this._history.length - 2] || '/index';
  }

  get index(): number {
    return this._curIdx;
  }

  public historyAt(index: number) {
    return this._history[index];
  }

  public gotoIndex(index: number) {
    if (index < 0) index = 0;
    this._ignoreEvent = true;
    try {
      let url = this.historyAt(index);
      if (url) this.router.navigateByUrl(url);
      this._curIdx = index - 1;
    } finally {
      this._ignoreEvent = false;
    }
  }

  public back() {
    this.gotoIndex(this._curIdx - 1);
  }

}
