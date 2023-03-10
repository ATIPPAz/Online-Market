import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'

//page
import { LoginComponentPage } from './pages/login-page/login-page.component'
import { ContactComponentPage } from './pages/contact-page/contact-page.component'
import { HomeComponentPage } from './pages/home-page/home-page.component'
import { OtherPageComponentPage } from './pages/other-page/other-page.component'

//component
import { NavbarComponent } from './components/utils/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { ContactComponent } from './components/contact/contact.component'
import { LoginComponent } from './components/login/login.component'
import { OtherComponent } from './components/other/other.component'

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginLayoutComponent,
    LoginComponentPage,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponentPage,
    ContactComponentPage,
    OtherComponent,
    OtherPageComponentPage,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
