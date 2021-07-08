import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit,OnDestroy {
  techStatus:string;
  techStatus2:string;
  subs2:Subscription;
  names:string;
  nameStatus:string;

  constructor(private _designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    //Ex-01
    const cusObs1=Observable.create(observer=>{
      setTimeout(()=>{
        observer.next("Angular");
      },1000)
      setTimeout(()=>{
        observer.next("Type Script");
      },2000)
      setTimeout(()=>{
        observer.next("HTML and CSS");
        //observer.complete()
      },3000)
      setTimeout(()=>{
        observer.next("JavaScript");
        observer.complete();
        //observer.error("limit exceed")
      },4000)

      setTimeout(()=>{
        observer.next('Jquery');
        //observer.complete();

      },5000)
    })
     cusObs1.subscribe((res)=>{
       this._designUtilityService.print1('elContainer',res)

     },
     (err)=>{
      this.techStatus='error'
     },
     ()=>{
       this.techStatus='completed'
     })




     //Ex-02
     const arr2=['Angular', 'JavaScript','HTML' ,'CSS','TypeScript']

     const cusOb2= Observable.create(observer=>{
       let count = 0;
      setInterval(()=>{
        observer.next(arr2[count])
        if(count >=3) {
          observer.error("not found")
       }
        if(count >=5) {
          observer.complete()
       }
        count++;
      },1000)
     })

     this.subs2=cusOb2.subscribe(
       res => this._designUtilityService.print1('elContainer2', res),
       (error)=>{
        this.techStatus2='error'
       },
       (completed)=>{
          this.techStatus2="completed"
       });


  //Ex-03

  const arr3=['Anup', 'Shekhar', 'Sharma', 'John', 'Alex', 'Robert']

  const cusOb3= Observable.create(observer=>{
    let count = 0;
   setInterval(()=>{
     observer.next(arr3[count])
     if(count >=3) {
       observer.error("not found")
    }
     if(count >=5) {
       observer.complete()
    }
     count++;
   },3000)
  })

  cusOb3.subscribe(res => this.names = res,
    error => this.nameStatus ='error',
    completed=> this.nameStatus='success');



  }


   ngOnDestroy(): void {
    this.subs2.unsubscribe()

   }

}
