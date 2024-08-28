import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../services/hacker-news.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  stories: any[] = [];
  error: string | null = null;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.hackerNewsService.getNewestStories().subscribe({
      next: (data) => {
        this.stories = data;
      },
      error: (err) => {
        this.error = 'Failed to load stories';
      }
    });
  }
}
