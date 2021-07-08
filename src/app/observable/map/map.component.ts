import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  subs1:Subscription;
  subs2:Subscription;
  sub3:Subscription;
  msg1:string;
  msg2:string;
  msg3:string;
  constructor(private _designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    //Ex-01
    const broadCastVideos=interval(1000);
    this.subs1=broadCastVideos.pipe(
      map((data)=> 'Video '+data)
    ).subscribe((res)=>{
     this.msg1= res
    })


    setTimeout(()=>{
        this.subs1.unsubscribe()
    },10000)


    //Ex-02

    const broadCastVideos2=interval(1000);
    this.subs2=broadCastVideos2.pipe(
      map((data)=> 'Video '+data*3)
    ).subscribe((res)=>{
     this.msg2= res
    })




   // Ex-03
   const members=[
     {id:'1',name:'manmohan'},
     {id:'2',name:'ramu'},
     {id:'3',name:'ruby'},
     {id:'4',name:'mohit'},
     {id:'5',name:'rahul'},
     {id:'6', name:'alexa'},
   ]

   const obs3=from(members)
   obs3.pipe(map((data)=>data.name)).subscribe((name)=>{
     this._designUtilityService.print('elContainer', name)

   })




    setTimeout(()=>{
        this.subs1.unsubscribe()
        this.subs2.unsubscribe()
    },10000)
  }



}
