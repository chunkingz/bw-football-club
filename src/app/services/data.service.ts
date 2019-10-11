import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = `https://api.football-data.org/v2`;

  constructor(private http: HttpClient) {
  }

  getCompetition(teamId: number) {
    const competition = `${this.url}/competitions/${teamId}/standings`;
    return this.http.get(competition, {headers: new HttpHeaders({'X-Auth-Token': 'ad2196b5f07c480b8d9421b59bd5d6cb'})});
  }

  getEPL() { return this.getCompetition(2021); }

  getSpanishPrimera() { return this.getCompetition(2014); }

  getItalySerieA() { return this.getCompetition(2019); }

  getUCL() { return this.getCompetition(2001); }

  getEuros() { return this.getCompetition(2018); }

  getEnglandChamp() { return this.getCompetition(2016); }

  getBrazilSerieA() { return this.getCompetition(2013); }

  getFranceLigue1() { return this.getCompetition(2015); }

  getGermanBundesLiga() { return this.getCompetition(2002); }

  getNetherlandsEredivisie() { return this.getCompetition(2003); }

  getPortugalPrimeiraLiga() { return this.getCompetition(2017); }

  getFIFAWorldCup() { return this.getCompetition(2000); }

}
