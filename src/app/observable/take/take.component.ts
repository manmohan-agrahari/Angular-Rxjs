import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  randomNames=from(["Ajay","Raj","Rohan","Riya","Rimmi","Nitu","Niya","Priya","Pooja"])

  constructor(private _designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    const source=interval(1000)

    //Ex-01
    this.randomNames.pipe(take(6)).subscribe((res)=>
    {
     this._designUtilityService.print('elContainer1',res)
    })



//Ex-02
        this.randomNames.pipe(takeLast(5)).subscribe((res)=>
        {
         this._designUtilityService.print('elContainer2',res)
        })

       let condition1=timer(20000)
       let condition2=fromEvent(document,'click')

        //Ex-03
        source.pipe(map(res=>'number'+res), takeUntil(condition2)).subscribe((res)=> this._designUtilityService.print('elContainer3',res))




  }

}
