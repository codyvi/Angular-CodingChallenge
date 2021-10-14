import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class Header {
  userData: any;
  constructor(private shared: SharedService) {
    this.userData = this.shared.getUser();
    console.log(this.userData);
  }
}
