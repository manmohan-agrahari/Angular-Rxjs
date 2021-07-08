import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './include/header/header.component';
import { MaterialModule } from './material.module';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { MapComponent } from './observable/map/map.component';
import { FluckComponent } from './observable/fluck/fluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { fromEvent, ReplaySubject } from 'rxjs';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { SharereplayComponent } from './observable/sharereplay/sharereplay.component';
import { CombinelatestComponent } from './observable/combinelatest/combinelatest.component';
import { ZipforkjoinComponent } from './observable/zipforkjoin/zipforkjoin.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservableComponent,
    PromiseComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    FluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    ConcatMergeComponent,
    SubjectComponent,
    MergemapComponent,
    ConcatmapComponent,
    SwitchmapComponent,
    SharereplayComponent,
    CombinelatestComponent,
    ZipforkjoinComponent,
    ReplaysubjectComponent,
    AsyncsubjectComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
