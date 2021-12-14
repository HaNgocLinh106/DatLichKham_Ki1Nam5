import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DichVu } from './dichVu.model';

@Injectable()
export class DichVuService {
  selectedDichVu: DichVu;
  dsDichVu: DichVu[];
  readonly baseURL = 'http://localhost:3000/dsDichVu';

  constructor(private http: HttpClient) { }

  postDichVu(emp: DichVu) {
    return this.http.post(this.baseURL, emp);
  }

  getDichVuList() {
    return this.http.get(this.baseURL);
  }

  putDichVu(emp: DichVu) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteDichVu(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
