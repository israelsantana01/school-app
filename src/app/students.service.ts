import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel } from './students/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  registerStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>("http://localhost:3000/students/", student);
  }

  listStudents() : Observable<StudentModel[]> {
   return this.http.get<StudentModel[]>("http://localhost:3000/students/");
  }

  refreshStudent(id: any, student: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>("http://localhost:3000/students/".concat(id), student);
  }

  deleteStudent(id: any): Observable<any> {
    return this.http.delete("http://localhost:3000/students/".concat(id));
  }
}
