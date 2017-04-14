import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InformationComponent } from './information/information.component';
import { LastResultsComponent } from './last-results/last-results.component';
import { LuckyNumberComponent } from './lucky-number/lucky-number.component';
import { LastNumbersComponent } from './last-numbers/last-numbers.component';
import { PartnersComponent } from './partners/partners.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformationComponent,
    LastResultsComponent,
    LuckyNumberComponent,
    LastNumbersComponent,
    PartnersComponent,
    WhoWeAreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
