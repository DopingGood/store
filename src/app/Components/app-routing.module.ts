import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from './IndexPage/index-page.component.ts';

const routes: Routes = [
	{path: '', component: 'IndexPageComponent'}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {
}