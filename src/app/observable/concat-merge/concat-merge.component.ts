import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.scss']
})
export class ConcatMergeComponent implements OnInit {

  constructor(private _designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech=interval(1000).pipe(map((v)=>'Tech Video #'+ (v+1)),take(5))
    const sourceComedy=interval(6000).pipe(map((v)=>'Comedy Video #'+ (v+1)),take(3))
    const sourceNews=interval(13000).pipe(map((v)=>'News Video #'+ (v+1)),take(4))

   // sourceTech.subscribe(res=>this._designUtilityService.print1('elContainer', res))

    const Finalobs=concat(sourceTech,sourceComedy,sourceNews)
    const Finalobs1=merge(sourceTech,sourceComedy,sourceNews)


    Finalobs.subscribe(res=>this._designUtilityService.print1('elContainer',res))
    Finalobs1.subscribe(res=>this._designUtilityService.print1('elContainer2',res))
  }

}
