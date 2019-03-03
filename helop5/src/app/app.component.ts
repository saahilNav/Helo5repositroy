import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helop5';
 public valueApComponent:any;

  getDatFromNewsList(event){
 console.log(event,"AppComponent")
this.valueApComponent=event;
console.log(this.valueApComponent," apcomponent reached data");

  }
}
