import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(data, filterCriteria){
        if (!filterCriteria)
            return data;
        return data.filter(bug => bug.name.indexOf(filterCriteria) !== -1);
    }
}
