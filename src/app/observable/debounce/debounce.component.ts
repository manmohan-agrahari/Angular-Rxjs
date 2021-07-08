import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'
import { LoadingBarService } from '@ngx-loading-bar/core'
import { fromEvent } from 'rxjs'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss'],
})
export class DebounceComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef
  reqData;
  @ViewChild('myInput2') myInput2: ElementRef
  reqData2;

  constructor(private loadingbar:LoadingBarService) {}

  ngOnInit(): void {
    // console.log(this.myInput.nativeElement)
  }
  ngAfterViewInit(): void {
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup')
    searchTerm
      .pipe(map((event) => event.target.value),
      debounceTime(1000))
      .subscribe((res) => {this.reqData = res
        console.log(res)
        this.loadingbar.start()
        setTimeout(()=>{this.reqData=null
        this.loadingbar.stop()},3000)
      })


      const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup')
      searchTerm2
        .pipe(map((event) => event.target.value),
        debounceTime(1000),
        distinctUntilChanged())
        .subscribe((res) => {this.reqData2 = res
          console.log(res)
          this.loadingbar.start()
          setTimeout(()=>{this.reqData2=null
          this.loadingbar.stop()},3000)
        })
  }
}
