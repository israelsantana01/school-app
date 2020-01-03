import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Array<any> = new Array;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students;
  }

  listStudents() {

  }
}
