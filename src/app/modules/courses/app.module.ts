import { NgModule } from '@angular/core';
import { CoursesComponent } from './components/courses/courses.component';
import { MaterialModule } from 'src/app/material-ui.module';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
    declarations: [CoursesComponent],
    imports: [
        MaterialModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModuleCourses { }