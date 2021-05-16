import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ChartService {
  
  readonly baseURL = 'http://localhost:3000/chartDetails/';

  constructor(private http: HttpClient) { }


  getChartDetails(type: string) {
    return this.http.get(this.baseURL+ `${type}`);
  }
}