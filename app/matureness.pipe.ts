import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "matureness",
  pure: false
})

export class MaturenessPipe implements PipeTransform {

  transform(input: Animal[], desiredMatureness){
    var output: Animal[] = [];
    if(desiredMatureness === "immatureAnimals"){
      for (var i = 0; i < input.length; i++){
        if (input[i].age <= 2){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMatureness === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input [i].age >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
