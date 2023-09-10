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
    if( this.form.valid ){
      this.dialogRef.close(this.form.value)
    }
  }

}
