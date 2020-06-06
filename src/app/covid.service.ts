import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable()
export class CovidService {

  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

getCovid()
{
  return  this.http.get(this.url);
}


}