import {Component, OnInit} from '@angular/core';
import {Router, RouterState} from '@angular/router';
import {Location} from '@angular/common';
import {HistoryService} from '../history/history.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  get hasBackButton(): boolean {
    let url = this.router.url;
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
