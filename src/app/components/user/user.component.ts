import { Component, Input } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class User {
  @Input() userInfo: any;

  constructor(private shared: SharedService) {}
  sendInfo() {
    this.shared.userSelected.emit(this.userInfo)
  }
}
