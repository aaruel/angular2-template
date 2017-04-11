// Angular imports
import { Component } from '@angular/core';

// Custom imports
import { BackendService } from "../backend/backend.service";
import { PersistentService } from "../main.global";
import { Cookie } from "ng2-cookies/ng2-cookies";

declare var $: any;

@Component({
    selector: 'main-app',
    templateUrl: 'main.component.html'
})
export class MainComponent {
    constructor(
    private backendService: BackendService,
    private ps: PersistentService
    ) {}

    ngOnInit() {
    }
}
