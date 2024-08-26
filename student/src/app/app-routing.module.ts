import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'sign-up', component: SignUpComponent }
];
//routes = ตัวกำหนดพาธให้กับเราใน navbar

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {} 
