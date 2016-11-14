import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    transform(data, attrName, descending = false){
        var bugComparer = createComparerFor(attrName);
        var comparer = descending ? negate(bugComparer) : bugComparer;
        var result =  data.sort(comparer);
        return result;
    }
}

function createComparerFor(attrName){
    return function bugComparer(bug1, bug2){
        var result = 0;
        if (bug1[attrName] < bug2[attrName]){
            result = -1;
        } else if (bug1[attrName] === bug2[attrName]){
            result = 0;
        } else {
            result = 1;
        }
        
        return result;
    }
}

function negate(criteriaFn){
    return function(){
        var negateResult =  -1 * criteriaFn.apply(this, arguments);
        return negateResult;
    }
}