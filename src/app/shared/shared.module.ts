import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule
    ],
  declarations: [NavComponent], // directives partage et components partage
  exports : [ NavComponent]

})
export class SharedModule { }
