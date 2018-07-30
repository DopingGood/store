import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './Components/app.module';
import { AppComponent } from './Components/app.component';

@NgModule({
	imports: [
		AppModule,
		AppComponent,
		ServerModule,
		ModuleMapLoaderModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})

export class AppServerModule {}