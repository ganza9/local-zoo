import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({

})

export class MaturenessPipe implements PipeTransform {

  transform(input: Animal[]){
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++){
      if (input[i].age <= 2){
        output.push(input[i]);
      }
    }
    return output;
  }
}
