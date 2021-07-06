import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor';
import { MatDialog } from '@angular/material/dialog';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {

  constructor(
    public service: DoctorService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  registerDoctor() {
    this.service.formData = new Doctor();
    this.openDialog();
  }

  // Só chama o componente que faz o registro e/ou edição
  openDialog(): void {
    const dialogRef = this.dialog.open(DoctorFormComponent, {
      width: '650px',
      height: '450px'
    });
  }

  removeDoctor(doctor: Doctor) {
    if (confirm("Do you really want to delete the doctor: " + doctor.name + "?")) {
      this.service.remove(doctor.id).subscribe(response => {
        this.toastr.success('Successfully deleted', 'Doctor Deletion');
        this.service.refreshList();
      },
        error => {
          console.log(error);
          this.toastr.error('Failed to delete', 'Doctor Deletion');
        });
    }
  }

  editDoctor(selectedDoctor: Doctor) {
    this.service.formData = Object.assign({}, selectedDoctor);
    this.openDialog();
  }
}
