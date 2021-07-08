import { Component, OnInit } from '@angular/core'
import { from, of } from 'rxjs'
import { map, mergeAll, mergeMap } from 'rxjs/operators'
import { DesignUtilityService } from 'src/app/design-utility.service'

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss'],
})
export class MergemapComponent implements OnInit {
  constructor(private _designUtilityService: DesignUtilityService) {}

  getData(data) {
    return of(data + ' video uploaded')
  }

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
        map((res) => this.getData(res)),
        mergeAll(),
      )
      .subscribe((res) => this._designUtilityService.print('elContainer2', res))

    //Ex-03

    source
      .pipe(
        mergeMap((res) => this.getData(res)),

      )
      .subscribe((res) => this._designUtilityService.print('elContainer3', res))
  }
}
