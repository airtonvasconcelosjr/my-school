import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  stname: string = "";
  course: string = "";
  fee: string = "";
  currentStudentID = "";
  
  isEditInputsVisible: boolean = false;


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
    });
  }

  setUpdate(data: any) {
    this.stname = data.stname;
    this.course = data.course;
    this.fee = data.fee;
    this.currentStudentID = data.id;
    this.isEditInputsVisible = true;
  }

  updateRecords() {
    let bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee,
    };

    this.http.put("http://localhost:8085/api/student/update" + "/" + this.currentStudentID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Updated Successfully");
      this.getAllStudent();
      window.location.reload();
    });
  }

  save() {
    if (this.currentStudentID === '') {
      this.register();
    } else {
      this.updateRecords();
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

