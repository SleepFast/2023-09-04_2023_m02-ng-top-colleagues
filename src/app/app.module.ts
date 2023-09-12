import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { WelcomePage } from './pages/welcome/welcome.page';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    HttpClientModule,
    CreateColleagueModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
