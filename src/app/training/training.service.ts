import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private avaliableExercises: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calories: 5},
    {id: 'touch-toes', name: 'Touch toes', duration: 180, calories: 15},
    {id: 'side-lunges', name: 'Side lunges', duration: 60, calories: 10},
    {id: 'burpees', name: 'Burpees', duration: 15, calories: 20},
  ];

  private runningExercise?: Exercise;


  getExercises() {
    return [...this.avaliableExercises];
  }

  startExcercise(selectedId: string) {
    const votedExercise = this.avaliableExercises.find(ex => 
      ex.id === selectedId);
      this.runningExercise = votedExercise;
    this.exerciseChanged.next({ ...this.runningExercise })
  }
}