import { Component, OnInit, Input } from '@angular/core';
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
  UCLGroup: any;

  constructor(private data: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    // display the loader
    this.spinner.show();

    this.EPL();
  }

  result(res) {
    this.teams = res;
    this.teamsStandingTable = this.teams.standings[0].table;
    this.competitionName = this.teams.competition.name;
    this.competitionAreaName = this.teams.competition.area.name;
    console.log(this.teams);
    console.log(this.teams.competition.name);

    // when the api call completes, hide the loader
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  EPL() {
    this.data.getEPL().subscribe(res => {
      return this.result(res);
    });
  }

  laLiga() {
    this.data.getSpanishPrimera().subscribe(res => {
      return this.result(res);
    });
  }

  ItalySerieA() {
    this.data.getItalySerieA().subscribe(res => {
      return this.result(res);
    });
  }

  UCL() {
    this.data.getUCL().subscribe(res => {
      this.teams = res;
      for (let i = 0; i < 25; i += 3 ) {
        // this.teamsStandingTable = this.teams.standings[i].table;
        // this.UCLGroup = this.teams.standings[i].group;
      }
      this.teamsStandingTable = this.teams.standings[21].table;
      this.UCLGroup = this.teams.standings[0].group;
      this.competitionName = this.teams.competition.name;
      this.competitionAreaName = this.teams.competition.area.name;
      console.log(this.teams);
      console.log(this.teamsStandingTable);
      console.log(this.competitionName);
      console.log(this.UCLGroup);

      // when the api call completes, hide the loader
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  UEC() {
    this.data.getEuros().subscribe(res => {
      return this.result(res);
    });
  }

  EnglandChampionship() {
    this.data.getEnglandChamp().subscribe(res => {
      return this.result(res);
    });
  }

  FIFAWorldCup() {
    this.data.getFIFAWorldCup().subscribe(res => {
      return this.result(res);
    });
  }

}
