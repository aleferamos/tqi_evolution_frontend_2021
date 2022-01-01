import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    ToastModule
  ],
  exports: [
    CalendarModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    ToastModule
  ]
})
export class CoreModule { }
