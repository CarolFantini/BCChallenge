import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  formData: Doctor = new Doctor();
  listDoctors: Doctor[];

  readonly baseURL = 'https://localhost:44333/api/Doctors';

  getAll() {
    return this.http.get<Doctor[]>(this.baseURL);
  }

  insert() {
    return this.http.post(this.baseURL, this.formData);
  }

  update() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  remove(idDoctor: string) {
    return this.http.delete(this.baseURL + '/' + idDoctor);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.listDoctors = res as Doctor[]);
  }

  getPatientsFromDoctor(idDoctor: string) {
    return this.http.get<Patient[]>(this.baseURL + '/list-patients-doctors/' + idDoctor)
  }
}
