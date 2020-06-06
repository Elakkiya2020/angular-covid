import { Component } from '@angular/core';
import {CovidService} from  './covid.service'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Covid 19';
  data:any;

  constructor(private covidData:CovidService){}

  ngOnInit()
  {

    this.covidData.getCovid().subscribe((results)=>{
      console.warn("results",results)
      this.data=results
    })

  }
}
