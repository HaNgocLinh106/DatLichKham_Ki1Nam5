import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { BSDichVu } from './BSDichVu.model';

@Injectable()
export class BSDichVuService {
  selectedBSDichVu: BSDichVu;
  dsBSDichVu: BSDichVu[];
  readonly baseURL = 'http://localhost:3000/dsBSDichVu';

  constructor(private http: HttpClient) { }

  postBSDichVu(BSDV: BSDichVu) {
    return this.http.post(this.baseURL, BSDV);
  }

  getBSDichVuList() {
    return this.http.get(this.baseURL);
  }

  putBSDichVu(BSDV: BSDichVu) {
    return this.http.put(this.baseURL + `/${BSDV._id}`, BSDV);
  }

  deleteBSDichVu(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
