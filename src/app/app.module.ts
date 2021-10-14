import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Header } from './components/header/header.component';
import { Users } from './components/users/users.component';
import { User } from './components/user/user.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Header, Users, User],
  bootstrap: [AppComponent],
})
export class AppModule {}
