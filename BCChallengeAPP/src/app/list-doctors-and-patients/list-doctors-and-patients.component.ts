import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PatientFormComponent } from '../list-patients/patient-form/patient-form.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-doctors-and-patients',
  templateUrl: './list-doctors-and-patients.component.html',
  styleUrls: ['./list-doctors-and-patients.component.css']
})
export class ListDoctorsAndPatientsComponent implements OnInit {

  patients: Patient[] = [];
  doctors: Doctor[] = [];
  doctorSelected: string = '';

  constructor(
    public patientService: PatientService,
    public doctorService: DoctorService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.doctorService.getAll().subscribe(res => {
      res.forEach(doctor => {
        this.doctors.push(doctor);
      });
    });
    this.patientService.refreshList();
  }
  // Só chama o componente que faz o registro e/ou edição
  openDialog(): void {
    const dialogRef = this.dialog.open(PatientFormComponent, {
      width: '650px',
      height: '450px'
    });
  }

  removePatient(patient: Patient) {
    if (confirm("Do you really want to delete the patient: " + patient.name + "?")) {
      this.patientService.remove(patient.id).subscribe(response => {
        this.toastr.success('Successfully deleted', 'Patient Deletion');
        this.patientService.refreshList();
      },
        error => {
          console.log(error);
          this.toastr.error('Failed to delete', 'Patient Deletion');
        });
    }
  }

  editPatient(selectedPatient: Patient) {
    this.patientService.formData = Object.assign({}, selectedPatient);
    this.openDialog();
  }

  getPatientsFromDoctor() {
    this.patients = [];
    this.doctorService.getPatientsFromDoctor(this.doctorSelected).subscribe(res => {
      res.forEach(patient => {
        this.patients.push(patient);
      });
    });
  }
}
