import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompaniesComponent } from './companies/companies.component';
import { PositionsComponent } from './positions/positions.component';
import { TasksComponent } from './tasks/tasks.component';

import { CompaniesService } from './companies/services/companies.service';

import { CardModule } from 'primeng/card';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { PositionsListComponent } from './companies/positions-list/positions-list.component';
import { TaskListComponent } from './companies/task-list/task-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'positions', component: PositionsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    CompaniesComponent,
    PositionsComponent,
    TasksComponent,
    CompaniesListComponent,
    PositionsListComponent,
    TaskListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    CardModule
  ],
  providers: [
    CompaniesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
