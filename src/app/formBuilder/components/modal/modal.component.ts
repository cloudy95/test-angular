import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  get cheklist() {
    return this.form.get('cheklist') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      question:['',[Validators.required]],
      typeanswer:['', [Validators.required]],
      cheklist:new FormArray([]),
      other:[false],
      required:[false]
    })
  }

  addItem(){
    this.cheklist.push(this.fb.group({
      label:['',[Validators.required]]
    }))
  }

  submit(){
    this.form.markAllAsTouched();
    const form = this.form.value;

    if( this.form.valid ){

      if( form.typeanswer == "checkbox" ){
        if( (!form.other && form.cheklist.length == 1 && form.cheklist[0].label == '') || (!form.other && form.cheklist.length == 1 && form.cheklist[0].label != '')){
          alert('Add at least 2 answer options')
          return;
        }
      }

      this.dialogRef.close(this.form.value)

    }
  }

}
