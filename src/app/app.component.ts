import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SideBarContainerComponent } from 'noodle-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SideBarContainerComponent) sideBar: SideBarContainerComponent

  loggedIn: boolean = false;

  submitted: boolean = false;

  loggingIn: boolean = false;

  toggleSidebar() {
    this.sideBar.toggleSidebar();
  }

  onLogin($event) {
    this.submitted = true;
    this.loggingIn = true;

    // call login api from server
    console.log($event)

    this.loggedIn = true;
  }

  constructor(){
  }

  ngAfterViewInit() {
  }
}
