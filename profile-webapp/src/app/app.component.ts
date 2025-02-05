import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { GoalsComponent } from './components/goals/goals.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
import { TrainingComponent } from './components/training/training.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,AboutmeComponent,AchievementsComponent,ContactmeComponent,
    ExperienceComponent,ExpertiseComponent,GoalsComponent,HobbiesComponent,HomeComponent,TrainingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profile-webapp';
}
