import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersComponent } from './components/answers/answers.component';
import { FormsAnswersRouting } from './from-answers.routing';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AnswersComponent
  ],
  imports: [
    CommonModule,
    FormsAnswersRouting,
    MaterialModule
  ]
})
export class FormAnswersModule { }
