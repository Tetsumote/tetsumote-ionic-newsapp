import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.page.html',
  styleUrls: ['./top-news.page.scss'],
})
export class TopNewsPage implements OnInit {
  news:any = [];
  constructor(private newsService: NewsService) {
    
   }

  ngOnInit() {
    this.getData()
    console.log(this.news,'test') 
  }
  getData() {
    this.newsService.getData('top-headlines?country=us&').subscribe(data => {
      this.news.push(data)
    })
  }

}

