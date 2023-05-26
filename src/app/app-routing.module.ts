import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthService } from './auth/auth.service';
import { ForumPageComponent } from './forum-page/forum-page.component';
import { ForumsComponent } from './forums/forums.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MediaComponent } from './media/media.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ForumCreationPageComponent } from './forum-creation-page/forum-creation-page.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'create',
    component: ForumCreationPageComponent
  },
  {
    path: 'forum',
    component: ForumPageComponent
  },
  {
    path: 'forums',
    component: ForumsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
