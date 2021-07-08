import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(element,res){
    let el=document.createElement('li')
    el.innerText=res

    document.getElementById(element).appendChild(el)
   }

  print1(element,res){
    let el=document.createElement('mat-list-item')
    el.innerText=res

    document.getElementById(element).appendChild(el)
   }
}
