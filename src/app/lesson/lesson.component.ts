import { Component, OnInit } from '@angular/core';
import {WordPair} from '../shared/word-pair.model';
import {LessonService} from './lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  words: WordPair[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.words = this.lessonService.getWords();
  }

}
