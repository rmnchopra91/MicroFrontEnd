import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }

  /**
   * api
   */
  public api() {

  }
}
