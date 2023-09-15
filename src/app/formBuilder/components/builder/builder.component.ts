import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ModalComponent } from '../modal/modal.component';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AnswerService } from 'src/app/formAnswers/service/answer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  public arrayQuestion:any[] = [];

  public form: FormGroup = new FormGroup({});

  get items() {
    return this.form.get('items') as any;
  }

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private answerService: AnswerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      items: new FormArray([])
    })
  }

  add(){
    const dialog = this.dialog.open( ModalComponent, {
      width: '400px'
    })

    dialog.afterClosed().subscribe(result => {
      if( typeof result == 'object' ){
        this.arrayQuestion.push(result)
        this.addItems();
      }
    });
  }

  addItems(){
    const length:number = this.arrayQuestion.length;
   
    if( this.arrayQuestion[length-1].typeanswer == 'paragraph' ){
      this.items.push(this.fb.group({
        input:['', this.arrayQuestion[length-1].required ? [Validators.required] : [] ]
      }))
    }else{
      if( this.arrayQuestion[length-1].cheklist.length > 0 ){
        if( this.arrayQuestion[length-1].other ){
          this.arrayQuestion[length-1].cheklist.push({
            label:'Other'
          })
        }
        let checkbox:any = {};
        this.arrayQuestion[length-1].cheklist.forEach( (value:any, index:number) => {
          checkbox[`item${index}`] = [false, []]
        });
        this.items.push(this.fb.group({...checkbox, text: ['', []]}))
      }
    }

  }

  trackByFn(index:number){
    return index;
  }

  review(){
    this.form.markAllAsTouched();

    let validation = true;
    let indexquestion:any = null; 
    this.form.value.items.map((item:any, index:number)=>{

      if( this.arrayQuestion[index].typeanswer == "checkbox" && this.arrayQuestion[index].required ){

        let options = Object.keys(item).map(val=> item[val])

        if( !options.includes(true)){
          validation = false;
          indexquestion = index;
        }

      }

    })

    if( !validation && indexquestion != null ){
      alert(`Selected at least one option " ${this.arrayQuestion[indexquestion]?.question} "`)
      return;
    }

    if( this.form.invalid ){
      return;
    }

    const arrayTemp = this.arrayQuestion;
    let arraynew:any[] = [];
    let formArray = this.form.value;
    arrayTemp.map((item, index)=>{
      arraynew.push({
        label: item.question,
        text: formArray.items[index]?.input ?? '',
        checks: item.cheklist.map((val:any, id:number)=>{
          if( item.typeanswer == 'checkbox' ){
            let label = '';
            if( val.label == 'Other' && formArray.items[index][`item${item.cheklist.length-1}`]){
              label = 'Other - '+formArray.items[index].text;
            }else{
              label = formArray.items[index][`item${id}`] ? val.label : ''
            }
            return { label }
          }else{
            return []
          }
        })
      })
    })

    this.answerService.setListAnswers = arraynew;
    this.router.navigate(['form/answers'])
  }

}
