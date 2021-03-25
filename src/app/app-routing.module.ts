import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { CommitsComponent } from './components/commits/commits.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'commits/:repository', component: CommitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
