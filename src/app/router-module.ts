import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallerieComponent } from './gallerie/gallerie.component';

const routes: Routes = [
  { path: '', component: GallerieComponent },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class RouterComp {
}