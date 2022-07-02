import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SalutationComponent } from './components/salutation/salutation.component';
import { FundamentalsComponent } from './components/fundamentals/fundamentals.component';
import { TrajectoryComponent } from './components/trajectory/trajectory.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalutationComponent,
    FundamentalsComponent,
    TrajectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
