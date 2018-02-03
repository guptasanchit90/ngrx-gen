import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { {{properCase name }}Service } from './{{ dashCase name }}.service';
import { {{camelCase name}}Reducer } from './{{ dashCase name }}.reducer';
import { {{properCase name }}Effects } from './{{ dashCase name }}.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule.forFeature('{{properCase name}}', {{camelCase name}}Reducer),
    EffectsModule.forFeature([{{properCase name }}Effects])
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


export { {{properCase name }}Service } from './{{ dashCase name }}.service';
export * from './{{ dashCase name }}.actions';
export { {{properCase name }}State } from './{{ dashCase name }}.state';
