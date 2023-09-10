import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AnswersComponent } from "./components/answers/answers.component";

const routes: Routes = [
    {
        path:'answers',
        component: AnswersComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FormsAnswersRouting{}