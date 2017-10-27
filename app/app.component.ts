import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>

    <ul *ngFor="let currentAnimal of animals">
      <li>{{currentAnimal.species}}</li>
      <li>{{currentAnimal.name}}</li>
      <li>{{currentAnimal.age}}</li>
      <li>{{currentAnimal.diet}}</li>
      <li>{{currentAnimal.location}}</li>
      <li>{{currentAnimal.caretakers}}</li>
      <li>{{currentAnimal.sex}}</li>
      <li>{{currentAnimal.likes}}</li>
      <li>{{currentAnimal.dislikes}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal ('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal ('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sun', 'Toys that are non rope based'),
    new Animal ('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises')
  ]

}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) { }
}
