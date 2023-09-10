import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../../service/answer.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {

  constructor(
    public answerService: AnswerService
  ) { }

}
