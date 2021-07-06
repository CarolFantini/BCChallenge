import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { ListDoctorsAndPatientsComponent } from './list-doctors-and-patients/list-doctors-and-patients.component';
import { DoctorFormComponent } from './list-doctors/doctor-form/doctor-form.component';
import { PatientFormComponent } from './list-patients/patient-form/patient-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ListDoctorsComponent,
    ListPatientsComponent,
    ListDoctorsAndPatientsComponent,
    DoctorFormComponent,
    PatientFormComponent,
    DoctorFormComponent,
    PatientFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgxMaskModule.forRoot(),
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
