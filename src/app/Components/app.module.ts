import { NgModule, PLATFORM_ID, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { AppComponent } from './app.component';
import { StoreHeaderComponent } from './header/store-header.component';
import { StoreFooterComponent } from './footer/store-footer.component';
import { IndexPageComponent } from './indexPage/index-page.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule.withServerTransition({ appId: 'store' }),
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		StoreHeaderComponent,
		StoreFooterComponent,
		IndexPageComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {

	// constructor(@Inject(PLATFORM_ID) private platformId: object) {
	// 	const platform = isPlatformBrowser(platformId) ? 'browser': 'server'
	// }
}