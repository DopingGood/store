import { ngModule, CommonModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PLATFORM_ID, isPlatformBrowser, Inject } from '@angular/common';

import { AppComponent } from './app.component.ts';
import { StoreHeaderComponent } from './header/store-header.component.ts';
import { StoreFooterComponent } from './footer/store-footer.component.ts';
import { IndexPageComponent } from './index-page.component.ts.';

import { AppRoutingModule } from './app-routing.module.ts';

@NgModule({
	imports: [
		BrowserModule.withServerTransition({ appId: 'store' }),
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		StoreHeaderComponent,
		StoreFooterComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {

	constructor(@Inject(PLATFORM_ID) private platformId: object) {
		const platform = isPlatformBrowser(platformId) ? 'browser': 'server'
	}
}