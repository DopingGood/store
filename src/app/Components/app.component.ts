import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.Emulated,
	selector: 'app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	message: string = 'AppComponent initialized';

	constructor() {
	}

	ngOnInit() {
		console.log(this.message);
	}
}