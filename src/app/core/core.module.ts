import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent, RootComponent } from './components';

@NgModule({
  declarations: [RootComponent, NotFoundComponent],
  exports: [RootComponent, NotFoundComponent],
  imports: [RouterModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
