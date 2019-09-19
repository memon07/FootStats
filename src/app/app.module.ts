import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { ClubListComponent } from './club-list/club-list.component';
import { HeaderComponent } from './@component/header/header.component';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import { ClubListService } from './club-list/club-list.service';

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ClubComponent } from './club/club.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ClubListComponent,
    HeaderComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [ClubListService,{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
