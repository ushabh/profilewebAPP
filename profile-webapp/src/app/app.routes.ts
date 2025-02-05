import { RouterOutlet, Routes } from '@angular/router';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { GoalsComponent } from './components/goals/goals.component';
import { TrainingComponent } from './components/training/training.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutmeComponent},
    {path:'expertise',component:ExpertiseComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'hobbies', component: HobbiesComponent },
    {path:'achievements', component: AchievementsComponent },
    {path:'goals', component: GoalsComponent },
    {path:'training', component: TrainingComponent },
    {path:'contact', component: ContactmeComponent }
];


