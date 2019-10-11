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
  teams1: any;
  teamIcon: any;

  constructor(private data: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    // display the loader
    this.spinner.show();

    this.EPL();
  }

  result(res) {
    this.teams = res;
    this.teams1 = this.teams.standings[0].table;
    console.log(this.teams);
    console.log(this.teams.competition.name);
    // console.log(this.teams1);

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
      return this.result(res);
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
