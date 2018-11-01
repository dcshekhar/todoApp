export class TodoModel {
  static id: number;
  constructor(
    private task: string,
    private isEditing: boolean = false,
    private isCompleted: boolean = false
  ) {}
}
