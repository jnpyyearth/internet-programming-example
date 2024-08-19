import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  newStudent = { id: 0, name: '', age: 0, gender: '', major: '' };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  addStudent() {
    if (this.newStudent.name && this.newStudent.age > 0) {
      this.studentService.addStudent(this.newStudent);
      this.newStudent = { id: 0, name: '', age: 0, gender: '', major: '' };
    }
  }
  
}
