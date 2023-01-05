import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BaysandComponent } from './baysand/baysand.component';
import { CablecarComponent } from './cablecar/cablecar.component';
import { CloudforestComponent } from './cloudforest/cloudforest.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DolphinsComponent } from './dolphins/dolphins.component';
import { FlyerComponent } from './flyer/flyer.component';
import { FooterComponent } from './footer/footer.component';
import { FultronComponent } from './fultron/fultron.component';
import { HomeComponent } from './home/home.component';
import { InfinityComponent } from './infinity/infinity.component';
import { LeafmonkeyComponent } from './leafmonkey/leafmonkey.component';
import { MerilionparkComponent } from './merilionpark/merilionpark.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NightsafariComponent } from './nightsafari/nightsafari.component';
import { PanpacificComponent } from './panpacific/panpacific.component';
import { PorkroyalComponent } from './porkroyal/porkroyal.component';
import { SeaturtleComponent } from './seaturtle/seaturtle.component';
import { UnderwaterComponent } from './underwater/underwater.component';
import { WavesComponent } from './waves/waves.component';
import { YotelComponent } from './yotel/yotel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    BaysandComponent,
    CablecarComponent,
    CloudforestComponent,
    ContactusComponent,
    DolphinsComponent,
    FlyerComponent,
    FooterComponent,
    FultronComponent,
    HomeComponent,
    InfinityComponent,
    LeafmonkeyComponent,
    MerilionparkComponent,
    NavbarComponent,
    NightsafariComponent,
    PanpacificComponent,
    PorkroyalComponent,
    SeaturtleComponent,
    UnderwaterComponent,
    WavesComponent,
    YotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
