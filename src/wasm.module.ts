import './rxjs-imports';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WasmComponent } from './wasm.component';
import { Wasm3dComponent } from './wasm-3d.component';
import { WasmService } from './wasm.service';

@NgModule({
  declarations: [
    WasmComponent,
    Wasm3dComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    WasmComponent,
    Wasm3dComponent
  ],
  providers: [
    WasmService
  ]
})
export class WasmModule { }