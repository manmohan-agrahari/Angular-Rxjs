import { Component, OnInit } from '@angular/core'
import { SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2 } from 'constants'
import { from } from 'rxjs'
import { filter, toArray } from 'rxjs/operators'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  dataArr = [
    { id: 1, name: 'manmohan', gender: 'male' },
    { id: 2, name: 'mohit', gender: 'male' },
    { id: 3, name: 'sneha', gender: 'female' },
    { id: 4, name: 'Navneet', gender: 'male' },
    { id: 5, name: 'mohit', gender: 'male' },
    { id: 6, name: 'riya', gender: 'female' },
    { id: 7, name: 'rohan', gender: 'male' },
    { id: 8, name: 'preeti', gender: 'female' },
    { id: 9, name: 'sonu', gender: 'male' },
  ]
  data;
  data2;
  data3;
  constructor() {}

  ngOnInit(): void {
    const source = from(this.dataArr)

    //Ex-01 filter by length
    source
      .pipe(
        filter((member) => member.name.length > 6),
        toArray(),
      )
      .subscribe((res) => (this.data = res))

    //Ex-02 filter by Gender
    source
      .pipe(
        filter((member) => member.gender == 'female'),
        toArray(),
      )
      .subscribe((res) => (this.data2 = res))
    //Ex-03 filter by nth item
    source
      .pipe(
        filter((member) => member.id<=4),
        toArray(),
      )
      .subscribe((res) => (this.data3 = res))
  }
}
