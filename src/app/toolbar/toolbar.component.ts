import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {HistoryService} from '../history/history.service';

/**
 * This component is seen everywhere in the app. It contains the name of the app
 * and a button to go back in history.
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  /**
   * Currently, the back button is never hidden.
   */
  get hasBackButton(): boolean {
    return true;
  }

  constructor(private router: Router,
              private location: Location,
              private historyService: HistoryService) {

  }

  ngOnInit() {
  }

  onClick() {
    this.historyService.back();
  }

}
