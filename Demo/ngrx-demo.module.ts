import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgrxDemoService } from './ngrx-demo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
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
