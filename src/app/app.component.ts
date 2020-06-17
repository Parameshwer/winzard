import { Component } from '@angular/core';
import { Router,ActivatedRoute }      from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public route : ActivatedRoute) {    
    console.log(route); 
  }
  title = 'winzard';

}
