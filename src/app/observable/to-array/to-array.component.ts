import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {take, toArray} from'rxjs/operators'

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  let obs1=from(['manmohan','ruby','sachin']).pipe(toArray()).subscribe(
    (res)=> console.log(res))
  }

}
