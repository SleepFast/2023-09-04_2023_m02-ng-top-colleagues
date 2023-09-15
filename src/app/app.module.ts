import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateColleagueReactiveModule } from './pages/create-colleague-reactive/create-colleague-reactive.module';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { WelcomePage } from './pages/welcome/welcome.page';
import { CreateColleagueFormsComponent } from './shared/components/create-colleague-forms/create-colleague-forms.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './pages/login/login.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    HttpClientModule,
    CreateColleagueModule,
    CreateColleagueReactiveModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
