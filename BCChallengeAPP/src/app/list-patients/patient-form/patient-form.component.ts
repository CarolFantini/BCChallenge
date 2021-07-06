import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(
    public service: PatientService,
    public dialogRef: MatDialogRef<PatientFormComponent>,
    private toastr: ToastrService,
    public serviceDoctor: DoctorService
  ) { }

  ngOnInit(): void {
    this.serviceDoctor.getAll().subscribe(res => {
      res.forEach(doctor => {
        this.doctors.push(doctor);
      });
    });
  }

  cancelDialog() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == '') {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.insert().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Patient Register')
        this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to submit', 'Patient Register')
      });
  }

  updateRecord(form: NgForm) {
    this.service.update().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Patient Register')
        this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to update', 'Patient Register')
      });
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Patient();
  }
}
