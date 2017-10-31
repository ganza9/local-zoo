import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="matureAnimals">Animals Over 2 Years Old</option>
    <option value="immatureAnimals">Animals Under 2 Years Old</option>
  </select>

  <ul *ngFor="let currentAnimal of childAnimalList | matureness:filterByMatureness">
    <li><b>Species:</b> {{currentAnimal.species}}</li>
    <li><b>Name:</b> {{currentAnimal.name}}</li>
    <li><b>Age:</b> {{currentAnimal.age}}</li>
    <li><b>Diet:</b> {{currentAnimal.diet}}</li>
    <li><b>Location:</b> {{currentAnimal.location}}</li>
    <li><b>Caretakers:</b> {{currentAnimal.caretakers}}</li>
    <li><b>Sex:</b> {{currentAnimal.sex}}</li>
    <li><b>Likes:</b> {{currentAnimal.likes}}</li>
    <li><b>Dislikes:</b> {{currentAnimal.dislikes}}</li>
    <li><button class="btn btn-info" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></li>
  </ul>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByMatureness: string = "immatureAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByMatureness = optionFromMenu;
  }
}
