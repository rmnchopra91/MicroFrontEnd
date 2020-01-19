import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { createCustomElement } from '@angular/elements';

import { CompatibleDeviceComponent } from './compatible-device/compatible-device.component';

@NgModule({
  declarations: [
    CompatibleDeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [CompatibleDeviceComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const {injector} = this;
    // const el = createCustomElement(UserPollComponent, { injector: this.injector });
    const compatibleDeviceElement = createCustomElement(CompatibleDeviceComponent, {injector: this.injector});
    customElements.define('compatible-device' , compatibleDeviceElement);
  }
}
