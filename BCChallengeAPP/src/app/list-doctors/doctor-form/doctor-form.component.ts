import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Doctor } from '../../models/doctor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {

  ufs = [
    { name: 'Acre', id: 'AC' },
    { name: 'Alagoas', id: 'AL' },
    { name: 'Amapá', id: 'AP' },
    { name: 'Amazonas', id: 'AM' },
    { name: 'Bahia', id: 'BA' },
    { name: 'Ceará', id: 'CE' },
    { name: 'Espírito Santo', id: 'ES' },
    { name: 'Goiás', id: 'GO' },
    { name: 'Maranhão', id: 'MA' },
    { name: 'Mato Grosso', id: 'MT' },
    { name: 'Mato Grosso do Sul', id: 'MS' },
    { name: 'Minas Gerais', id: 'MG' },
    { name: 'Pará', id: 'PA' },
    { name: 'Paraíba', id: 'PB' },
    { name: 'Paraná', id: 'PR' },
    { name: 'Pernambuco', id: 'PE' },
    { name: 'Piauí', id: 'PI' },
    { name: 'Rio de Janeiro', id: 'RJ' },
    { name: 'Rio Grande do Norte', id: 'RN' },
    { name: 'Rio Grande do Sul', id: 'RS' },
    { name: 'Rondônia', id: 'RO' },
    { name: 'Roraima', id: 'RR' },
    { name: 'Santa Catarina', id: 'SC' },
    { name: 'São Paulo', id: 'SP' },
    { name: 'Sergipe', id: 'SE' },
    { name: 'Tocantis', id: 'TO' },
    { name: 'Distrito Federal', id: 'DF' },
  ];

  constructor(
    public service: DoctorService,
    public dialogRef: MatDialogRef<DoctorFormComponent>,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

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
        this.toastr.success('Submitted successfully', 'Doctor Register')
        this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to submit', 'Doctor Register')
      });
  }

  updateRecord(form: NgForm) {
    this.service.update().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Doctor Register')
        this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to update', 'Doctor Register')
      });
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Doctor();
  }
}
