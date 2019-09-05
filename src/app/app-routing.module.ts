import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesPageComponent } from './modules/jokes/pages/jokes/jokes.page';

const routes: Routes = [
  { path: '', redirectTo: '/jokes', pathMatch: 'full' },
  { path: 'jokes', component: JokesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
