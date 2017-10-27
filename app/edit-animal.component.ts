import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h4>Edit Animal</h4>
      <h3>{{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
      <label>Edit Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Edit Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Edit Caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <button class="btn btn-danger" (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
