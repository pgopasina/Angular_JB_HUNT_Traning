import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PersonalComponent } from './personal/personal.component';
import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile.component';
import { WorkComponent } from './work/work.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent,
children:[
  { path: 'personal', component: PersonalComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hierarchy', component: HierarchyComponent },

] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
