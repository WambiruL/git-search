import { UserserviceService } from './userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import {NgProgressHttpClientModule} from '@ngx-progressbar/http-client';
import {NgProgressModule} from '@ngx-progressbar/core';
import { HighlightDirective } from './highlight.directive';
import { DatePipe } from './date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NotFoundComponent,
    NavbarComponent,
    RepositoriesComponent,
    UserComponent,
    HighlightDirective,
    DatePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
