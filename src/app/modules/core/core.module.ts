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
import {SkeletonModule} from 'primeng/skeleton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {StyleClassModule} from 'primeng/styleclass';
import {TabViewModule} from 'primeng/tabview';
import {InputMaskModule} from 'primeng/inputmask';
import {SidebarModule} from 'primeng/sidebar';
import {StepsModule} from 'primeng/steps';
import {TooltipModule} from 'primeng/tooltip';
import {SplitterModule} from 'primeng/splitter';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
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
    ToastModule,
    SkeletonModule,
    ProgressSpinnerModule,
    TableModule,
    StyleClassModule,
    TabViewModule,
    InputMaskModule,
    SidebarModule,
    StepsModule,
    TooltipModule,
    SplitterModule,
    CarouselModule,
    ConfirmDialogModule,
    DialogModule
  ],
  exports: [
    CalendarModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    SkeletonModule,
    ProgressSpinnerModule,
    TableModule,
    StyleClassModule,
    TabViewModule,
    InputMaskModule,
    SidebarModule,
    StepsModule,
    TooltipModule,
    SplitterModule,
    CarouselModule,
    ConfirmDialogModule,
    DialogModule
  ]
})
export class CoreModule { }
