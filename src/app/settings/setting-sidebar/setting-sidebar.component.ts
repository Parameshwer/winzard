import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-sidebar',
  templateUrl: './setting-sidebar.component.html',
  styleUrls: ['./setting-sidebar.component.scss']
})
export class SettingSidebarComponent implements OnInit {
  userInfo: Object = {};
  showFiller: boolean = false
  navBar: Array<any> = [
    {
      name: "Account Info",
      route:"./accountInfo",
      key: "accountInfo",
      iconName: 'fa-dashboard',
    },
    {
      name: "User & Roles",
      route: "UserAndRoles",
      iconName: 'fa-users',
      key: "users",
    },
    {
      name: 'Invocies',
      route: 'invoices',
      iconName: 'fa-users',
    },
    {
      name: 'Payment Method',
      route: 'paymentMethod',
      iconName: 'fa-bullhorn'
    },
    {
      name: 'Terms of Service',
      route: 'terms',
      iconName: 'fa-eye'
    },
    {
      name: 'Personal Info',
      route: './personalInfo',
      iconName: 'fa-shopping-cart'
    },
  ]

  constructor() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit() {

  }
  dropdownTrigger(ev, item) {
    item.isOpen = !item.isOpen;
  }

}
