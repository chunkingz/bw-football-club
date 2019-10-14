import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teams: any;
  teamsStandingTable: any;
  competitionName: any;
  competitionAreaName: any;

  UCLTeamsStandings: any;

  constructor(private data: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    // display the loader
    this.spinner.show();

    this.EPL();
  }

  /**
   * Fetches the results, returns it, and stops the loader
   * @param res - returned response
   */
  result(res) {
    this.teams = res;
    this.UCLTeamsStandings = this.teams.standings;
    this.teamsStandingTable = this.teams.standings[0].table;
    this.competitionName = this.teams.competition.name;
    this.competitionAreaName = this.teams.competition.area.name;

    // when the api call completes, hide the loader
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  /**
   * Fetches English Premier League Standings
   */
  EPL() {
    this.data.getEPL().subscribe(res => {
      return this.result(res);
    });
  }

  /**
   * Fetches Spanish La Liga (Primera Division) Standings
   */
  laLiga() {
    this.data.getSpanishPrimera().subscribe(res => {
      return this.result(res);
    });
  }

  /**
   * Fetches Italy Serie A Standings
   */
  ItalySerieA() {
    this.data.getItalySerieA().subscribe(res => {
      return this.result(res);
    });
  }

  /**
   * Fetches UEFA Champions League Standings
   */
  UCL() {
    this.data.getUCL().subscribe(res => {
      return this.result(res);
    });
  }

  /**
   * Fetches UEFA Europian Champions Standings
   */
  UEC() {
    this.data.getEuros().subscribe(res => {
      return this.result(res);
    });
  }

  /**
   * Fetches English Championship League Standings
   */
  EnglandChampionship() {
    this.data.getEnglandChamp().subscribe(res => {
      return this.result(res);
    });
  }

  /**
   * Fetches FIFA World Cup Standings
   */
  FIFAWorldCup() {
    this.data.getFIFAWorldCup().subscribe(res => {
      return this.result(res);
    });
  }

}
