import { NgModule } from '@angular/core';

import { JokesPageComponent } from './pages/jokes/jokes.page';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';

@NgModule({
  declarations: [JokesPageComponent, JokesListComponent],
  imports: [],
  providers: [],
  bootstrap: [JokesPageComponent]
})
export class JokesModule {}
