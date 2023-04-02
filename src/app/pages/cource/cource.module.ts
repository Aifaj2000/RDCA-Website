import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourceRoutingModule } from './cource-routing.module';
import { CourceComponent } from './cource.component';
import { SeniorCollegeComponent } from './senior-college/senior-college.component';
import { JuniorCollegeComponent } from './junior-college/junior-college.component';
import { VocationalCoursesComponent } from './vocational-courses/vocational-courses.component';
import { PostGraduationComponent } from './post-graduation/post-graduation.component';
import { UnderGraduationComponent } from './under-graduation/under-graduation.component';


@NgModule({
  declarations: [
    CourceComponent,
    SeniorCollegeComponent,
    JuniorCollegeComponent,
    VocationalCoursesComponent,
    PostGraduationComponent,
    UnderGraduationComponent
  ],
  imports: [
    CommonModule,
    CourceRoutingModule
  ]
})
export class CourceModule { }
