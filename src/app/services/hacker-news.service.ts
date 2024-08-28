import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Story {
  id: number;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private apiUrl = 'https://localhost:5001/api/news';  // Change to your actual API base URL

  constructor(private http: HttpClient) { }

  getNewestStories(): Observable<Story[]> {
    return this.http.get<Story[]>(`${this.apiUrl}/newest`);
  }

  getStoryById(id: number): Observable<Story> {
    return this.http.get<Story>(`${this.apiUrl}/${id}`);
  }
}
export function AppComponent(AppComponent: any, appConfig: ApplicationConfig) {
  throw new Error('Function not implemented.');
}

