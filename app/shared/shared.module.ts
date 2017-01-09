import { NgModule } from '@angular/core';
import { KeyPipe, KeysPipe } from './../pipes/key.pipe';

@NgModule({
    imports: [],
    exports: [
        KeyPipe,
        KeysPipe
    ],
    declarations: [
        KeyPipe,
        KeysPipe
        ],
    providers: [],
})
export class SharedModule { }
