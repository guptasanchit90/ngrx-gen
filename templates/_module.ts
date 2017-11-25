import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { {{properCase name }}Service } from './{{ dashCase name }}.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [],
  declarations: []
})
export class {{ properCase name }}Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: {{ properCase name }}Module,
      providers: [{{ properCase name }}Service]
    };
  }
}
