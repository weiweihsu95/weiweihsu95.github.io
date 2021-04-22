import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  { path: "education", component: EducationComponent },
  { path: "about", component: AboutComponent },
  { path: "skills", component: SkillsComponent },
  { path: "mobile", component: MobileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
