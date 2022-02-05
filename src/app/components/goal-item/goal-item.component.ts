import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.css'],
})
export class GoalItemComponent implements OnInit {
  @Input() description!: string;
  // @Output() onDelete = new EventEmitter()

  @Output() deleteGoal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(){
    console.log(this.description);
    this.deleteGoal.emit();
  }
}
