import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GraphQLModule } from './graphql.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MemberInfoComponent } from './components/team/components/member-info/member-info.component';
import { MemberCardComponent } from './components/team/components/member-card/member-card.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    MemberInfoComponent,
    MemberCardComponent,
    PerformanceComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, MatCardModule,
    AppRoutingModule, MatTabsModule, MatButtonModule,
    MatDialogModule, FormsModule, MatInputModule,
    MatSelectModule, MatFormFieldModule, GraphQLModule,
    FlexLayoutModule, MatIconModule, MatTableModule,
    MatExpansionModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
