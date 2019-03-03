import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  @Input() newsDetailObj:any;
  constructor() { }

  ngOnInit() {
  }
  




}
