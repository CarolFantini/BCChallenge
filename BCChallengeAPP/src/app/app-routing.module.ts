import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListDoctorsAndPatientsComponent } from './list-doctors-and-patients/list-doctors-and-patients.component';
import { DoctorFormComponent } from './list-doctors/doctor-form/doctor-form.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { PatientFormComponent } from './list-patients/patient-form/patient-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'doctor-form', component: DoctorFormComponent },
  { path: 'patient-form', component: PatientFormComponent },
  { path: 'list-doctors', component: ListDoctorsComponent },
  { path: 'list-patients', component: ListPatientsComponent },
  { path: 'list-doctors-and-patients', component: ListDoctorsAndPatientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
