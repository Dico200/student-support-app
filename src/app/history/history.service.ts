import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

/*
This little service is from https://blog.hackages.io/our-solution-to-get-a-previous-route-with-angular-5-601c16621cf0
It stores the history
 */
@Injectable()
export class HistoryService {
  private _history: string[] = ["/index"];
  private _curIdx: number = 0;
  private _ignoreEvent: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  public loadRouting(): void {
    this.router.events
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
