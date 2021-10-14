import { importType } from '@angular/compiler/src/output/output_ast';

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  user: any;
  constructor() {}
  userSelected = new EventEmitter<any>();
  setUser(data) {
    this.user = data;
  }

  getUser() {
    return this.user;
  }
}
