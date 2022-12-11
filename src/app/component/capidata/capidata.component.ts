import { Component } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
@Component({
  selector: 'app-capidata',
  templateUrl: './capidata.component.html',
  styleUrls: ['./capidata.component.css']
})
export class CapidataComponent {
    allapidata:any = [];
   constructor(private newsapiservices:NewsapiService){}
   ngOnInit():void{
      this.newsapiservices.getApiData().subscribe((val) =>{
        this.allapidata = val.articles;
      })
   }
}
