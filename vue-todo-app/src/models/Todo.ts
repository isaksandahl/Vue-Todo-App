export class Todo {
  status: string;
  constructor(public task: string, public isDone: boolean) {
    this.status = "In progress";
  }
}
