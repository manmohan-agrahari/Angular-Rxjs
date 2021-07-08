import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { combineLatest, from, fromEvent, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent implements OnInit, AfterViewInit,AfterViewChecked{


  @ViewChild('name') name:ElementRef;
  @ViewChild('color') color:ElementRef;

  names:string[]=["Anup", "Shekhar", "Sharma","Uxtrendz","John","Alex"];
  colors:string[]=["red", "green","blue","yellow","violet","purple","pink"]


  color1:string='';
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
   const nameObs=fromEvent<any>(this.name.nativeElement,'change').pipe(
    map(event=>event.target.value)
  )
   const colorObs=fromEvent<any>(this.color.nativeElement,'change').pipe(
      map(event=>event.target.value))


     //Ex-01
   combineLatest(nameObs,colorObs).subscribe(([name,color])=>console.log(name, color))

  }
  change($event){
   return $event.value
  }

  ngAfterViewChecked()
  {

  }


}



