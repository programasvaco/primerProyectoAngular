import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { HeroesComponent } from './components/heroes/heroes.component';
import { TbHeroesComponent } from './components/tb-heroes/tb-heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TbHeroesComponent,
    HeroDetailComponent,
    MensajesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,    
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
