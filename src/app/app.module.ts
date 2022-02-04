import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './components/goals/goals.component';
import { GoalItemComponent } from './components/goal-item/goal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
