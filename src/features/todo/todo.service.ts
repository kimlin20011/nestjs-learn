import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  todos = [
    {
      id: 1,
      title: 'Ironman 13th',
      description: 'NestJS tutorial.',
      completed: false,
    },
  ];

  getTodo(id: string) {
    return this.todos.find((todo) => todo.id.toString() === id);
  }
}
