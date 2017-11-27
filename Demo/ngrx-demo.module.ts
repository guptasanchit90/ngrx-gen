import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgrxDemoService } from './ngrx-demo.service';
import { ngrxDemoReducer } from './ngrx-demo.reducer';
import { NgrxDemoEffects } from './ngrx-demo.effects';

export const reducers: ActionReducerMap<any> = {
  ngrxDemoState: ngrxDemoReducer
};


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule.forFeature("NgrxDemo", reducers),
    EffectsModule.forFeature([NgrxDemoEffects])
  ],
  exports: [],
  declarations: []
})
export class NgrxDemoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgrxDemoModule,
      providers: [NgrxDemoService]
    };
  }
}


export { NgrxDemoService } from './ngrx-demo.service';
export * from './ngrx-demo.actions';
export { NgrxDemoState } from './ngrx-demo.state';
