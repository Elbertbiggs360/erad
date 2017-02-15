import { Component, OnInit, Input } from '@angular/core';

import { User } from '../shared/user';

@Component({
  templateUrl: 'header.component.html',
  selector: 'app-header',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

	@Input() authUser: User[];

	private errorMessage;

	constructor(){
	}

	ngOnInit(): void {
		
	}

}