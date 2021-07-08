import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
 obsMsg:string;
 unsubscribe:boolean=false;
 videoSubscription:Subscription;
  constructor(private _designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
   // const broadCastVideos=interval(1000)
   const broadCastVideos= timer(3000,1000)
     this.videoSubscription=broadCastVideos.subscribe(
      (res)=>{
        console.log(res)
        this._designUtilityService.print('elConatiner1','video'+res)
        this._designUtilityService.print('elConatiner2','video'+res)
        if(this.unsubscribe!=true)
        this._designUtilityService.print('elConatiner3','video'+res)
        if(res>5){
          this.videoSubscription.unsubscribe()
        }

      })

  }
  unsubscribleEvent(){
  this.unsubscribe=!this.unsubscribe
  console.log(this.unsubscribe)
  }

}
