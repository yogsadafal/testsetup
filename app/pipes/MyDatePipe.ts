import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';
@Pipe({
    name: 'myDate'
})

export class MyDatePipe implements PipeTransform {
    datePipe: DatePipe;
    constructor(){
        this.datePipe= new DatePipe('en-us')
    }
    transform(data: any): any {
        var currentDate = new Date();
        if (typeof data === 'string')
            data = new Date(data);

        let displayOnlyTime:boolean = currentDate.toDateString() === data.toDateString(); 
        let displayFormat = displayOnlyTime ? 'hh:mm:ss' : 'dd-MMM-yyyy hh:mm:ss';
        return this.datePipe.transform(data, displayFormat);
    }
}