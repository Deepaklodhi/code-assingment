import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import * as hackerNewsService from './app/services/hacker-news.service';
import { ApplicationConfig } from '@angular/core';

bootstrapApplication(hackerNewsService.AppComponent, appConfig)
  .catch((err) => console.error(err));
