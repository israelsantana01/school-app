import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentModel } from './student.model';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: any[] = [];
  form: FormGroup;

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      age: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
    this.listStudents();
  }

  refresh(id: number) {
    if (this.form.invalid) {
      return;
    }

    this.studentsService.refreshStudent(id, this.form.value).subscribe(() => {
      this.form.reset();
      this.listStudents();
    }, err => {
      console.log('ERROR!', err);
    })
  }

  delete(id: number) {
    this.studentsService.deleteStudent(id).subscribe(() => {
      this.listStudents();
    }, err => {
      console.log('ERROR!', err);
    })
  }

  register() {
    if (this.form.valid && (this.form.get('name').value.length > 0)) {
      this.studentsService.registerStudent(this.form.value).subscribe(res => {
        this.form.reset();
        this.listStudents();
      }, err => {
        console.log('ERROR!', err);
      })
    }
  }

  listStudents() {
    this.studentsService.listStudents().subscribe(students => {
      this.students = students;
    }, err => {
      console.log('ERROR!', err);
    });
  }
}
