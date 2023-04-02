import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { EventsComponent } from './pages/events/events.component';
import { GallaryComponent } from './pages/gallary/gallary.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { LibraryAtAGlanceComponent } from './pages/library-at-a-glance/library-at-a-glance.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { QuestionPaperComponent } from './pages/question-paper/question-paper.component';
import { NssComponent } from './pages/nss/nss.component';
import { AdministrationModule } from './pages/administration/administration.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { SeniorCollegeComponent } from './pages/senior-college/senior-college.component';
// import { JuniorCollegeComponent } from './pages/junior-college/junior-college.component';
// import { CocationalCoursesComponent } from './pages/cocational-courses/cocational-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    EventsComponent,
    GallaryComponent,
    FeedbackComponent,
    LibraryAtAGlanceComponent,
    SyllabusComponent,
    QuestionPaperComponent,
    NssComponent,
    NoticeComponent,
    // SeniorCollegeComponent,
    // JuniorCollegeComponent,
    // CocationalCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrationModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
