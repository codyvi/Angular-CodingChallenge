import { importType } from '@angular/compiler/src/output/output_ast';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  user: any;
  constructor() {

  }
  setUser(data){
    this.user = data;
  }

  getUser(){
    return this.user;
  }
}
