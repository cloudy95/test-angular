import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private listAnswers: BehaviorSubject<any> = new BehaviorSubject([]);
  
  get getListAnswers(){
    return this.listAnswers.asObservable();
  }

  set setListAnswers(val:any[]){
    this.listAnswers.next(val)
  }

}
