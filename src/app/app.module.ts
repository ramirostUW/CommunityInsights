import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { NgbDateFRParserFormatter } from './ngb-date-fr-parser-formatter';
import { NgbUTCStringAdapter } from './ngb-UTC-string-adapter';
import {
  NgbDropdownModule,
  NgbModule,
  NgbPopover,
  NgbTabsetModule,
  NgbDatepicker,
  NgbDatepickerModule,
  NgbDatepickerConfig,
  NgbDateParserFormatter,
  NgbDateAdapter
} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingComponent } from './trending/trending.component';
import { VerbatimComponent } from './verbatim/verbatim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { TreeMapComponent } from './tree-map/tree-map.component';
import { TagInputModule } from 'ngx-chips';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingComponent,
    VerbatimComponent,
    ChartComponent,
    TreeMapComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    TagInputModule,
    GraphQLModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'verbatim', component: VerbatimComponent},
      { path: 'about', component: AboutPageComponent },
      { path: '', component: TrendingComponent }, 
    ])
    
  ],
  exports: [],
  providers: [
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateFRParserFormatter
    },
    {
      provide: NgbDateAdapter,
      useClass: NgbUTCStringAdapter
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
