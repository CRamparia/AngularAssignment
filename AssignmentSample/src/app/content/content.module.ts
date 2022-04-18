import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ModifyContentComponentComponent, ModifyContentDialogComponent } from '../modify-content-component/modify-content-component.component';
import { HoverAffectDirective } from '../hover-affect.directive';
import { TypeFilterPipe } from '../type-filter.pipe';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ContentListComponent,
    ContentDetailComponent,
    ContentCardComponent,
    ModifyContentComponentComponent,
    ModifyContentDialogComponent,
    TypeFilterPipe,
    HoverAffectDirective
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class ContentModule { }
