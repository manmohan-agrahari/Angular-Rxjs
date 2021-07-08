import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs'
import { map, toArray, pluck } from 'rxjs/operators'

@Component({
  selector: 'app-fluck',
  templateUrl: './fluck.component.html',
  styleUrls: ['./fluck.component.scss'],
})
export class FluckComponent implements OnInit {
  data: string[]
  data2:string[]

  constructor() {}
  users = [
    {
      name: 'manmohan',
      skills: 'Angular',
      job: { title: 'developer', post: 'UI' },
    },
    { name: 'Rohan', skills: 'React', job: { title: 'tester', post: 'java' } },
    {
      name: 'mohit',
      skills: 'Html, css',
      job: { title: 'Architect', post: 'data' },
    },
  ]

  ngOnInit(): void {

    //Ex-01
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => (this.data = res))

    //Ex-02
    from(this.users)
    .pipe(pluck('job', 'title'), toArray())
    .subscribe((res) => (this.data2 = res))
  }
}
