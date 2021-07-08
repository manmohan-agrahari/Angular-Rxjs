import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsg2:any;

  constructor(private _designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    const obs1=of('Anup', 'Ankur','Sachin')
    const obs2=of({'a':'Anup', 'b':'Bani','c':'Chandu'})
    obs2.subscribe((res)=> this.obsMsg2=res)
    obs1.subscribe(
      (res)=>{
        this._designUtilityService.print('elContainer', res)
      })



      //Ex-02 from
      let arr=['Anup1','Ankur1','Sachin1']
      const obs3=from(arr)
      obs3.subscribe((res)=> this._designUtilityService.print('elContainer3',res))



      //from promise
      const promise=new Promise((res)=>{
         setTimeout(()=>{
           res("Promise resloved")
         }, 3000)
      })
      const obs4=from(promise);
      obs4.subscribe((res)=>{
       // console.log("from promise=>",res)
       this._designUtilityService.print('elContainer4',res)
      })
      const obs5=from('welcome  manmohan');
      obs5.subscribe((res)=>{
       // console.log("from promise=>",res)
       this._designUtilityService.print('elContainer5',res)
      })
  }

}
