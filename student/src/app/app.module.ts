import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    AboutUsComponent,
    StudentComponent,
    HomeComponent,
    LoginComponent,
    ContactUsComponent,
    InventoryComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
