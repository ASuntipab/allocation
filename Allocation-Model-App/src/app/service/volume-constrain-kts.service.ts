import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class VolumeConstrainKtsService {

  url = environment.apiUrlNestJS + 'volume-constrain-kts/';
  constructor(
    private http: HttpClient, private loaderService: NgxSpinnerService) { }

  errorMethod = (error: any): any => {
    this.loaderService.hide();
    return throwError(error);
  }
  getList(year: any, month: any) {

    // tslint:disable-next-line: arrow-return-shorthand
    return this.http
      .get(this.url, { params: { year: year, month: month } })
      .pipe(catchError(this.errorMethod));
  }
  getMonthlyConstrains(year: any, month: any) {

    // tslint:disable-next-line: arrow-return-shorthand
    return this.http
      .get(this.url+ 'monthly-constrains', { params: { year: year, month: month } })
      .pipe(catchError(this.errorMethod));
  }
  getListHistory(version: any) {

    // tslint:disable-next-line: arrow-return-shorthand
    return this.http
      .get(this.url + 'history', { params: { version: version } })
      .pipe(catchError(this.errorMethod));
  }
  create(data: any) {
    // tslint:disable-next-line: arrow-return-shorthand
    return this.http
      .post(this.url, data)
      .pipe(catchError(this.errorMethod));
  }

  createForm(data: any) {
    // tslint:disable-next-line: arrow-return-shorthand
    return this.http
      .post(this.url + 'form', data)
      .pipe(catchError(this.errorMethod));
  }
  getForm(year: any) {

    return this.http
      .get(this.url + 'form')
      .pipe(catchError(this.errorMethod));
  }
  getFormHistory(version: any) {

    return this.http
      .get(this.url + 'form/history', { params: { version: version } })
      .pipe(catchError(this.errorMethod));
  }
  createVersion(data: any) {
    // tslint:disable-next-line: arrow-return-shorthand
    return this.http
      .post(this.url + 'version', data)
      .pipe(catchError(this.errorMethod));
  }
  getVersion(year: any, month: any) {
    return this.http
      .get(this.url + 'version', { params: { year: year, month: month } })
      .pipe(catchError(this.errorMethod));
  }
}
