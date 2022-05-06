import { Component, OnInit } from '@angular/core';

export interface News{
  title: string;
  desc: string;
  date: number;
  photo: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : News = {
    title : "Best Company Awards 2023",
    desc : "บริษัท ขอนแก่น ซอฟต์เทค ได้รางวัลบริษัทยอดเยี่ยมแห่งปี 2023 Best Company Awards 2023",
    date : Date.now(),
    photo: 'https://climateandpopulation.org/wp-content/uploads/2020/11/Trophy-2018.jpg',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
