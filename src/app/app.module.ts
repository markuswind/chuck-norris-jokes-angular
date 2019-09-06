import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JokesModule } from './modules/jokes/jokes.module';
import { JokesEffects } from './modules/jokes/state/jokes.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JokesModule,
    // FIXME: is it possible to import effects in the jokes.module instead?
    EffectsModule.forRoot([JokesEffects]),
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
