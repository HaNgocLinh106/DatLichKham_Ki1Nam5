import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { BacSi } from './BacSi.model';

@Injectable()
export class BacSiService {
  selectedBacSi: BacSi;
  BacSis: BacSi[];
  readonly baseURL = 'http://localhost:3000/BacSis';

  constructor(private http: HttpClient) { }

  postBacSi(BS: BacSi) {
    return this.http.post(this.baseURL, BS);
  }

  getBacSiList() {
    return this.http.get(this.baseURL);
  }

  putBacSi(BS: BacSi) {
    return this.http.put(this.baseURL + `/${BS._id}`, BS);
  }

  deleteBacSi(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
