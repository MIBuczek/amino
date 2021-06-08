import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { OffertComponent } from './views/offert/offert.component';
import { ReferenceComponent } from './views/reference/reference.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { LangSwitcherComponent } from './components/lang-switcher/lang-switcher.component';
import { CompanyComponent } from './views/company/company.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffertComponent,
    ReferenceComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    LangSwitcherComponent,
    CompanyComponent,
    NotFoundComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent, CarouselComponent],
})
export class AppModule {}
