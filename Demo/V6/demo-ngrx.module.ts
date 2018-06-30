import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DemoNgrxService } from './demo-ngrx.service';
import { demoNgrxReducer } from './demo-ngrx.reducer';
import { DemoNgrxEffects } from './demo-ngrx.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('DemoNgrx', demoNgrxReducer),
    EffectsModule.forFeature([DemoNgrxEffects])
  ],
  exports: [],
  declarations: []
})
export class DemoNgrxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemoNgrxModule,
      providers: [DemoNgrxService]
    };
  }
}

export { DemoNgrxService } from './demo-ngrx.service';
export * from './demo-ngrx.actions';
export { DemoNgrxState } from './demo-ngrx.state';
