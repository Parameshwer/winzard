import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  userInfo:Object = {};
  showFiller: boolean = false
  navBar: Array<any> = [
    {
      name: "Organization",
      // route: "/home/dashboard",
      key: "dashboard",
      iconName:'fa-dashboard',
    },
    {
      name: "Goal Management",
      route: "/home/users",
      iconName:'fa-users',
      key: "users",
    },
    {
      name: 'Talent Manager',
      route: './talentMangement',
      iconName:'fa-users',
    },
    {
      name: 'Employee Experience',
      route: '/home/ads',
      iconName:'fa-bullhorn'
    },
    {
      name: 'People Assessment',
      route: './peopleAssessment',
      iconName:'fa-eye'
    },
    {
      name: 'Learning & Development',
      route: '/home/orders',
      iconName:'fa-shopping-cart'
    },
    
    {
      name: 'Action Plan',
      route: 'user',
      iconName:'fa-exchange'
    },
    // {
    //   name: 'Advertiser Transactions',
    //   route: 'advert',
    //   iconName:'fa-exchange'
    // },
    // {
    //   name: 'Configurations',
    //   route: 'config',
    //   iconName:'fa-cogs'
    // },
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
