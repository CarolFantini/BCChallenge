import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  formData: Patient = new Patient();
  listPatients: Patient[];

  readonly baseURL = 'https://localhost:44333/api/Patients';

  getAll() {
    return this.http.get<Patient[]>(this.baseURL);
  }

  insert() {
    return this.http.post(this.baseURL, this.formData);
  }

  update() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  remove(idPatient: string) {
    return this.http.delete(this.baseURL + '/' + idPatient);
  }

  refreshList() {
    this.getAll()
      .toPromise()
      .then(res => this.listPatients = res as Patient[]).finally(() => {
        this.formatBirthDate();
      });
  }

  formatBirthDate() {
    this.listPatients.forEach(patient => {
      // Pegar só os 10 primeiros chars, para o bind de data no dialog de cadastro/edição funcionar.
      // A data precisa estar sem o time, e no formato 'yyyy/mm/dd'
      patient.birthDate = patient.birthDate.substring(0, 10);
    });
  }
}
