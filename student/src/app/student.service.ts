import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
  major: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, gender: 'male', major: 'ENVI' },
    { id: 2, name: 'Jane Smith', age: 22, gender: 'female', major: 'IT'},
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.students);

  getStudents() {
    return this.studentsSubject.asObservable();
  }

  addStudent(student: Student) {
    student.id = this.students.length + 1;
    this.students.push(student);
    this.studentsSubject.next(this.students);
  }
}
