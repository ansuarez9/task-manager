import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { PositionFormComponent } from './position/position-form.component';
import { CompanyFormComponent } from './company/company-form.component';

import { CompaniesService } from './dashboard/services/companies.service';

import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { CompaniesListComponent } from './dashboard/companies-list/companies-list.component';
import { PositionsListComponent } from './dashboard/positions-list/positions-list.component';
import { TaskListComponent } from './dashboard/task-list/task-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'positions', component: PositionFormComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'company', component: CompanyFormComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    PositionFormComponent,
    TasksComponent,
    CompaniesListComponent,
    PositionsListComponent,
    TaskListComponent,
    CompanyFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    CompaniesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
