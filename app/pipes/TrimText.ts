import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trimText'
})

export class TrimText implements PipeTransform {
    transform(data: String,trimLength:number): any {
        
        if(trimLength && data.length>trimLength){
            return (data.slice(0,trimLength)+"...");
        }else{
            return data;
        }
    }
}