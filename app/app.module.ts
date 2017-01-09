import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DialogService } from './services/dialog.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GeradoraModule } from './pages/geradora/geradora.module';
import { RecicladoraModule } from './pages/recicladora/recicladora.module';
import { UsuarioModule } from './pages/usuario/usuario.module';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        GeradoraModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1 }),
        RecicladoraModule,
        UsuarioModule

    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        DialogService,

    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
