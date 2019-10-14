import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrls: ['./livescore.component.scss']
})
export class LivescoreComponent implements OnInit {

  teams: any;
  totalMatchCount: any;
  liveMatch: any;

  constructor(private data: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    // display the loader
    this.spinner.show();

    this.livescore();
  }

  /**
   * Fetches the results, returns it, and stops the loader
   * @param res - returned response
   */
  result(res) {
    this.teams = res;
    this.totalMatchCount = this.teams.count;
    this.liveMatch = this.teams.matches;

    // when the api call completes, hide the loader
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  /**
   * Fetches Livescore Data
   */
  livescore() {
    this.data.getLivescore().subscribe(res => {
      return this.result(res);
    });
  }


}
