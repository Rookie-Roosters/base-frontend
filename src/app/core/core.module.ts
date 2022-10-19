import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BankingService } from '../data/services/banking.service';
import { NotFoundComponent, RootComponent } from './components';

@NgModule({
  declarations: [RootComponent, NotFoundComponent],
  providers: [BankingService],
  exports: [RootComponent, NotFoundComponent],
  imports: [RouterModule, HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
