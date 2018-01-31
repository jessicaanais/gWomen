import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { JobsComponent } from './jobs/jobs.component';
import { JoinLoginComponent } from './join-login/join-login.component';
import { SignComponent } from './sign/sign.component'
import { UsereventsComponent } from './userevents/userevents.component'
import { UserjobsComponent } from './userjobs/userjobs.component';

import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { FilterjobsPipe } from './filterjobs.pipe';
import { UsersComponent } from './users/users.component';
import { FilterstatePipe } from './filterstate.pipe';
import { FiltertitlePipe } from './filtertitle.pipe';
import { FilterpeoplePipe } from './filterpeople.pipe';
import { AdminviewComponent } from './adminview/adminview.component';

// import { FilterPipe} from './filter.pipe';
// import { FilterjobsPipe } from './filterjobs.pipe';

const routeLists : Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"events/admin", component:EventsComponent},
  {path:"jobs/admin", component:JobsComponent},
  {path:"join", component:JoinLoginComponent},
  {path:"join/signup", component:SignComponent},
  {path:"join/users", component: UsersComponent},
  {path:"userevents", component: UsereventsComponent},
  {path:"userjobs", component: UserjobsComponent},
  {path:"admin/dashboard", component: AdminviewComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FilterPipe,
    EventsComponent,
    JobsComponent,
    JoinLoginComponent,
    FilterjobsPipe,
    SignComponent,
    UsersComponent,
    FilterstatePipe,
    FilterstatePipe,
    FiltertitlePipe,
    FiltertitlePipe,
    UsereventsComponent,
    UserjobsComponent,
    FilterpeoplePipe,
    AdminviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
