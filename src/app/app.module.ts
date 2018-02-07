import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,MatIconModule} from '@angular/material';
import { MatSidenavModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import { MatButtonModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatFormFieldModule,MatTabsModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators,FormsModule} from '@angular/forms';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material';


import { AppComponent } from './app.component';
import { PilotComponent } from './pilot/pilot.component';


@NgModule({
  declarations: [
    AppComponent,
    PilotComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatExpansionModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
