import { Component, Input } from '@angular/core';
import {Bug} from './Bug';

@Component({
    selector: 'bugstat',
    template: `<section class="stats"><span class="closed">{{getCloseCount()}}</span>
			<span> / </span>
			<span>{{data.length}}</span></section>`
})
export class BugStatComponent{
    @Input()
    data:Array<Bug>;

     getCloseCount(){
        return this.data.filter(bug =>bug.isClosed).length;
    }
}