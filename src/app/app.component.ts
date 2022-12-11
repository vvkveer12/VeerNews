import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {NewsapiService} from './services/newsapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newswebapp';
  newsapidata:any = [];
  constructor(private newsapiService:NewsapiService){}
  ngOnInit():void{
   this.newsapiService.getApiData().subscribe((data)=>{
      this.newsapidata = data.articles;
      console.log(this.newsapidata)
    })
  }
}
