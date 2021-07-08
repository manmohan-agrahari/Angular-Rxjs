import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'
import { fromEvent } from 'rxjs'
import { DesignUtilityService } from 'src/app/design-utility.service'

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn: ElementRef
  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    let val = 1
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((data) => {
      this.designUtilityService.print('elContainer','video'+val)
      this.designUtilityService.print('el1Container','video'+val)
      val++
    })
  }
}
