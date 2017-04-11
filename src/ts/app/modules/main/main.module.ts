// Angular imports
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router, CanActivate } from '@angular/router';
import { HttpModule } from "@angular/http";

// Custom Imports
import { OutletComponent } from './main.component';
import { MainComponent } from './main/main.component';
import { BackendService } from './backend/backend.service';
import { PersistentService } from './main.global';

const appRoutes: Routes = [
    { path: "", component: MainComponent }
];

@NgModule({
    imports: [
        RouterModule,
        HttpModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        OutletComponent,
        MainComponent
    ],
    bootstrap: [
        OutletComponent
    ],
    providers: [
        BackendService,
        PersistentService
    ]
})
export class MainModule{}
