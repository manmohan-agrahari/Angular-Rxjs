import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],


})
export class RetryComponent implements OnInit {

  person:any;
  loading:boolean=false;
  status:string='No data'
  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {

  }

  fetchDetails(){
  if(this.status!='Fetched'){
  this.status='fetching...'
  this.loading=true;
   this.http.get('http://localhost:3100/clients').pipe(
     //retry(2)
     retryWhen(err=> err.pipe(delay(3000),
     scan((retryCount)=>{
       if(retryCount>=5)
       throw err;
       else{
         retryCount=retryCount+1
         this.status= 'Retrying Attempt #'+retryCount
         return retryCount;
       }
     },0)))
     ).subscribe((res)=>{
     if(res){
     setTimeout(()=>{
     this.person=res[0]
     this.status='Fetched';
     this.loading=false},2000)
     console.log(this.person)}
    },
    (error)=>{
      setTimeout(()=>{
     this.status='Problem in fetching data...'
     this.loading=false;},2000)
    })
  }
}


}
