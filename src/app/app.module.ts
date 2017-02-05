import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { RlTagInputModule } from 'angular2-tag-input';
import { TagInputModule } from 'ng2-tag-input';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { EventsComponent } from './components/event/index/events.component';
import { EventComponent } from './components/event/show/event.component';
import { NewEventComponent } from './components/event/new/new-event.component';
import { ProfileEventsComponent } from './components/event/profile/profile-events.component';

import { TagsQueryComponent } from './components/tag/query/tags-query.component';
import { TagComponent } from './components/tag/show/tag.component';

import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { EventService } from './services/event.service';
import { TagService } from './services/tag.service';
import { UserService } from './services/user.service';

import { AuthGuard, OrgGuard } from './guards/auth.guard';

import { ProfileIndexComponent } from './components/profile/profile-index/profile-index.component';
import { ProfileFullComponent } from './components/profile/profile-full/profile-full.component';
import { ProfileMyEventsComponent } from './components/profile/profile-my-events/profile-my-events.component';
import { ProfileJoinedEventsComponent } from './components/profile/profile-joined-events/profile-joined-events.component';

const profileRoutes: Routes = [
    { path: '', component: ProfileIndexComponent },
    { path: 'full', component: ProfileFullComponent },
    { path: 'events', component: ProfileMyEventsComponent },
    { path: 'joined', component: ProfileJoinedEventsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    UnauthorizedComponent,
    NewEventComponent,
    ProfileEventsComponent,
    ForbiddenComponent,
    TagsQueryComponent,
    NotFoundComponent,
    NotFoundComponent,
    TagComponent,
    ProfileIndexComponent,
    ProfileFullComponent,
    ProfileMyEventsComponent,
    ProfileJoinedEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RlTagInputModule,
    TagInputModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'events', component: EventsComponent },
      { path: 'events/new', component: NewEventComponent, canActivate: [AuthGuard, OrgGuard] },
      { path: 'events/:id', component: EventComponent },
      { path: 'tags', component: TagsQueryComponent },
      { path: 'tags/:tag', component: TagComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: profileRoutes },
      { path: 'unauthorized', component: UnauthorizedComponent },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: '404', component: NotFoundComponent},
      { path: '**', redirectTo: '/404' }
    ])
  ],
  providers: [
    EventService,
    AuthService,
    ApiService,
    UserService,
    TagService,
    AuthGuard,
    OrgGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
