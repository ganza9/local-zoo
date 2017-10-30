import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
  <ul *ngFor="let currentAnimal of animals | matureness">
    <li>Species: {{currentAnimal.species}}</li>
    <li>Name: {{currentAnimal.name}}</li>
    <li>Age: {{currentAnimal.age}}</li>
    <li>Diet: {{currentAnimal.diet}}</li>
    <li>Location: {{currentAnimal.location}}</li>
    <li>Caretakers: {{currentAnimal.caretakers}}</li>
    <li>Sex: {{currentAnimal.sex}}</li>
    <li>Likes: {{currentAnimal.likes}}</li>
    <li>Dislikes: {{currentAnimal.dislikes}}</li>
    <li><button class="btn btn-info" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></li>
  </ul>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="matureAnimals">Animals Over 2 Years Old</option>
    <option value="immatureAnimals">Animals Under 2 Years Old</option>
  </select>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByMatureness: string = "immatureAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }
}
