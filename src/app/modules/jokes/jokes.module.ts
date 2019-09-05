import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokesPageComponent } from './pages/jokes/jokes.page';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';

@NgModule({
  declarations: [JokesPageComponent, JokesListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [JokesPageComponent]
})
export class JokesModule {}
