import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {
   getData(res){
     return of(res+ 'video uploaded').pipe(delay(2000));
   }
  constructor(private _designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])

    //Ex-01

    source
      .pipe(map((res) => this.getData(res)))
      .subscribe((res) =>
        res.subscribe((res1) =>
          this._designUtilityService.print('elContainer1', res1),
        ),
      )

    //Ex-02

    source
      .pipe(
        mergeMap((res) => this.getData(res)),

      )
      .subscribe((res) => this._designUtilityService.print('elContainer2', res))

    //Ex-03

    source
      .pipe(
        concatMap((res) => this.getData(res)),

      )
      .subscribe((res) => this._designUtilityService.print('elContainer3', res))
  }
}

