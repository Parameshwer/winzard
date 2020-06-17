import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-size',
  templateUrl: './company-size.component.html',
  styleUrls: ['./company-size.component.scss']
})
export class CompanySizeComponent implements OnInit {
  public companySizes: Array<object> = [
    {id:1, value: "0-10", name: "0-10"},
    {id:2, value: "10-100", name: "10-100"},
    {id:3, value: "100-200", name: "100-200"},
    {id:4, value: "200-500", name: "200-500"},
    {id:5, value: "500-1000", name: "500-1000"},
    {id:6, value: "1000-2000", name: "1000-2000"},
    {id:7, value: "2000", name: "2000+"}
  ];
  constructor() { }

  ngOnInit() {
  }
  onCompanySizeSelect(size) {
    this.companySizes.map((companySize) => {
      companySize['selected'] = false;
    });
    
    size.selected = true;
  }
}
