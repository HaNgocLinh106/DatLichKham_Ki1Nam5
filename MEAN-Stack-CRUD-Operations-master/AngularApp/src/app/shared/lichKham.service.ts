import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { LichKham } from './lichKham.model';
@Injectable()
export class LichKhamService {
  selectedLichKham: LichKham;
  dsBSLichKham: LichKham[];
  readonly baseURL = 'http://localhost:3000/dsBSLichKham';

  constructor(private http: HttpClient) { }

  postLichKham(emp: LichKham) {
    return this.http.post(this.baseURL, emp);
  }

  getLichKhamList() {
    return this.http.get(this.baseURL);
  }

  putLichKham(emp: LichKham) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteLichKham(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
