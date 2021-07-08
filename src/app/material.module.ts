import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge'
import {MatTableModule} from '@angular/material/table'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIcon, MatIconModule} from '@angular/material/icon'
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {MatSelectModule} from '@angular/material/select';


const materialComponents=[
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatBadgeModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  LoadingBarModule,
  MatSelectModule
]

@NgModule({
  declarations:[],
  imports:[materialComponents],
  exports:[materialComponents]
})
export class MaterialModule{
}
