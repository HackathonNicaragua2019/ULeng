import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  protected giphyUrl = 'https://api.giphy.com/v1/gifs/search';
  protected giphyApiKey = 'ZqEM2uA99KuTr8FXvv5ipHBDoCg6qyGF';

  constructor(private http: HttpClient) { }

  getImage(query): Observable<any> {
    const requestURL = `${this.giphyUrl}?api_key=${this.giphyApiKey}&q=${query}`;
    return this.http.get(requestURL);
  }

  getImage1(query): Observable<any> {
    const requestURL = `${this.giphyUrl}?api_key=${this.giphyApiKey}&q=${query}`;
    return this.http.get(requestURL);
  }

  getImage2(query): Observable<any> {
    const requestURL = `${this.giphyUrl}?api_key=${this.giphyApiKey}&q=${query}`;
    return this.http.get(requestURL);
  }

  getImage3(query): Observable<any> {
    const requestURL = `${this.giphyUrl}?api_key=${this.giphyApiKey}&q=${query}`;
    return this.http.get(requestURL);
  }

  getImage4(query): Observable<any> {
    const requestURL = `${this.giphyUrl}?api_key=${this.giphyApiKey}&q=${query}`;
    return this.http.get(requestURL);
  }
}
