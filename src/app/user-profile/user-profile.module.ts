import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { PersonalComponent } from './personal/personal.component';
import {MenuModule} from 'primeng/menu';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { ChipModule } from 'primeng/chip';
import {TreeModule} from 'primeng/tree';
import { DividerModule } from "primeng/divider";
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    UserProfileComponent,
    PersonalComponent,
    WorkComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    DashboardComponent,
    HierarchyComponent
  ],
  imports: [
    ChipModule,
    DialogModule,
    DividerModule,
    TreeModule,
    ProgressSpinnerModule,
    CommonModule,
    UserProfileRoutingModule,
    MenuModule,
    TableModule,
    CardModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
  ],
  providers:[DatePipe]
})
export class UserProfileModule { }
