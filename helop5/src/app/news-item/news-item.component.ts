import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
@Input()newsListObj:any;
@Output() newsItem=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  sendData(event){
  console.log(event,"this send data");
    this.newsItem.emit(event);

  }


}
