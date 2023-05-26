import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ForumsComponent } from './forums/forums.component';
import { ForumPageComponent } from './forum-page/forum-page.component';
import { ProfileComponent } from './profile/profile.component';
import { MediaComponent } from './media/media.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { ForumCreationPageComponent } from './forum-creation-page/forum-creation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    ForumsComponent,
    ForumPageComponent,
    ProfileComponent,
    MediaComponent,
    AdminPageComponent,
    ForumCreationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
