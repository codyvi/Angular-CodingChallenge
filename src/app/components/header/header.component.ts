import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class Header {
  userData: any;
  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.shared.userSelected.subscribe((user: any) => {
      this.userData = user;
    });
  }
}
