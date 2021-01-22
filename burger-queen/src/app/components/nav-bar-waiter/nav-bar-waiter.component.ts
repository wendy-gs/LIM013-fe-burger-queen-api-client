import { Component, OnInit } from '@angular/core';
import { faHome, faClipboardList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar-waiter',
  templateUrl: './nav-bar-waiter.component.html',
  styleUrls: ['./nav-bar-waiter.component.sass']
})
export class NavBarWaiterComponent implements OnInit {
	faHome = faHome;
  faClipboardList = faClipboardList;
  faSignOutAlt = faSignOutAlt;
  user:any =sessionStorage.getItem("email");

	constructor() { }

  ngOnInit(): void {
  }
  exit(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
  }
  

}