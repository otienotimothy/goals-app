import { Component, OnInit } from '@angular/core';
import { Goal } from '../../goal';
import {goals} from '../../mock-goals';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goals: Goal[] = goals;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription
  }

}
