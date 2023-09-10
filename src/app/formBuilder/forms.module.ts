import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './components/builder/builder.component';
import { FormsBuilder } from './forms.routing';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesPipe } from './pipe/pipes.pipe';


@NgModule({
  declarations: [
    BuilderComponent,
    ModalComponent,
    PipesPipe
  ],
  imports: [
    CommonModule,
    FormsBuilder,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormBuilderModule { }
