import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.css'],
})
export class GoalItemComponent implements OnInit {
  @Input() description!: string;

  constructor() {}

  ngOnInit(): void {}
}
