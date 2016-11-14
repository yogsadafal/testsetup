import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MyAppComponent} from './app.component';
import {UtilsModule} from './utils/utils.module';

import {BrowserModule} from '@angular/platform-browser';
import {BugTrackerComponent} from './bugtracker/bugtracker.component';
import {BugComponent} from './bugtracker/bug.component';
import {BugStatComponent} from './bugtracker/bugstat.component';
import {BugInputComponent} from './bugtracker/buginput.component';
import {MyDatePipe} from './pipes/MyDatePipe';
import {TrimText} from './pipes/TrimText';
import {BugStorage} from './services/BugStorage';
import {BugOperstaionService} from './services/BugOperation';
import {FilterPipe} from './pipes/FilterPipe';



@NgModule({
    imports : [BrowserModule,FormsModule, UtilsModule,HttpModule],
    bootstrap : [MyAppComponent],
    providers : [BugStorage,BugOperstaionService],
    declarations : [MyAppComponent,BugTrackerComponent,BugComponent,BugStatComponent,BugInputComponent,MyDatePipe,TrimText,FilterPipe]
})
export class MyAppModule{

}