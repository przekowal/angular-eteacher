import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonAddComponent } from './lesson/lesson-add/lesson-add.component';
import {LessonService} from './lesson/lesson.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    LessonAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
