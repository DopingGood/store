import { ngModule, CommonModule } from '@angular/core';
import { BrowserMode } from '@angular/platform-browser';

import { AppComponent } from './app.component.ts';
import { StoreHeaderComponent } from './header/store-header.component.ts';
import { StoreFooterComponent } from './footer/store-footer.component.ts';
import { IndexPageComponent } from './index-page.component.ts.';

import { AppRoutingModule } from './app-routing.module.ts';

@NgModule({
	imports: [
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		StoreHeaderComponent,
		StoreFooterComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {}