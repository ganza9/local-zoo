import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>

    <ul *ngFor="let currentAnimal of animals">
      <li>Species: {{currentAnimal.species}}</li>
      <li>Name: {{currentAnimal.name}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.location}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>
      <li><button class="btn btn-info" (click)="editAnimal(currentAnimal)">Edit</button></li>
    </ul>
    <hr>
    <div *ngIf="selectedAnimal">
      <h4>Edit Animal</h4>
      <h3>{{selectedAnimal.name}} the {{selectedAnimal.species}}</h3>
      <label>Edit Name:</label>
      <input [(ngModel)]="selectedAnimal.name">
      <label>Edit Age:</label>
      <input [(ngModel)]="selectedAnimal.age">
      <label>Edit Caretakers:</label>
      <input [(ngModel)]="selectedAnimal.caretakers">
      <button class="btn btn-danger" (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal ('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal ('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sun', 'Toys that are non rope based'),
    new Animal ('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises')
  ];

  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) { }
}
