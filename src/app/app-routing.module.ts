import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';
import { CombinelatestComponent } from './observable/combinelatest/combinelatest.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { ExhaustmapComponent } from './observable/exhaustmap/exhaustmap.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FluckComponent } from './observable/fluck/fluck.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SharereplayComponent } from './observable/sharereplay/sharereplay.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { ZipforkjoinComponent } from './observable/zipforkjoin/zipforkjoin.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {
    path:'observable',
    component:ObservableComponent,
    children:[
      {path:'', component:ListComponent},
      {path:'interval', component:IntervalComponent},
      {path:'fromEvent', component:FromEventComponent},
      {path:'of-from', component:OfFromComponent},
      {path:'to-array', component:ToArrayComponent},
      {path:'custom-observable', component:CustomObservableComponent},
      {path:'map', component:MapComponent},
      {path:'fluck', component:FluckComponent},
      {path:'filter', component:FilterComponent},
      {path:'tap', component:TapComponent},
      {path:'take',component:TakeComponent},
      {path:'retry', component:RetryComponent},
      {path:'debounce', component:DebounceComponent},
      {path:'concat-merge', component:ConcatMergeComponent},
      {path:'subject', component:SubjectComponent},
      {path:'mergemap', component:MergemapComponent},
      {path:'concatmap',component:ConcatmapComponent},
      {path:'switchmap', component:SwitchmapComponent},
      {path:'exhaustmap',component:ExhaustmapComponent},
      {path:'sharereplay',component:SharereplayComponent},
      {path:'combinelatest',component:CombinelatestComponent},
      {path:'zip',component:ZipforkjoinComponent},
      {path:'replaysubject', component:ReplaysubjectComponent},
      {path:'asyncsubject', component:AsyncsubjectComponent}

    ]
  },
  {
    path:'promise',
    component:PromiseComponent
  },
  {
    path:'**',
    redirectTo:'/promise'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
