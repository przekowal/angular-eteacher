import { Component, OnInit } from '@angular/core';
import {LessonService} from '../lesson.service';
import {NgForm} from '@angular/forms';
import {WordPair} from '../../shared/word-pair.model';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.css']
})
export class LessonAddComponent implements OnInit {

  constructor(private lessonService: LessonService) { }

  ngOnInit() {
  }

  onAddWordWordPair(form: NgForm) {
    const value = form.value;
    const newPair = new WordPair(value.source, value.target);
    this.lessonService.addWords(newPair);
  }

}
