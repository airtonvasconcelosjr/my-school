import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.css']
})
export class StudencrudComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  stname: string = "";
  course: string = "";
  fee: string = "";
  currentStudentID = "";

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  ngOnInit(): void {}

  getAllStudent() {
    this.http.get("http://localhost:8085/api/student/").subscribe((resultData: any) => {
      this.isResultLoaded = true;
      console.log(resultData.data);
      this.StudentArray = resultData.data;
    });
  }

  register() {
    let bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee,
    };

    this.http.post("http://localhost:8085/api/student/add", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Successfully");
      this.getAllStudent();
      window.location.reload();
    });
  }


  save() {
    if (this.currentStudentID === '') {
      this.register();
      window.location.reload();
  }
}

  setDelete(data: any) {
    this.http.delete("http://localhost:8085/api/student/delete" + "/" + data.id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Deleted Successfully");
      this.getAllStudent();
    });
  }
}

