import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Patient } from '../models/patient';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  constructor(
    public service: PatientService,
    public dialog: MatDialog,
    public doctorService: DoctorService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  registerPatient() {
    this.service.formData = new Patient();
    this.openDialog();
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
      this.service.remove(patient.id).subscribe(response => {
        this.toastr.success('Successfully deleted', 'Patient Deletion');
        this.service.refreshList();
      },
        error => {
          console.log(error);
          this.toastr.error('Failed to delete', 'Patient Deletion');
        });
    }
  }

  editPatient(selectedPatient: Patient) {
    this.service.formData = Object.assign({}, selectedPatient);
    this.openDialog();
  }
}
