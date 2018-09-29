import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'index-page-component',
	templateUrl: 'index-page.component.html'
})

export class IndexPageComponent implements OnInit {
	message: string = 'IndexPageComponent initialized';
	
	constructor() {
	}

	ngOnInit() {
		console.log(this.message);
	}
}