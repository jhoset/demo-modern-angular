import {Component, computed, effect, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type FilterOption = 'all' | 'completed' | 'pending';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent {

  public newTodoControl: FormControl = new FormControl();

  //? Writable Signal to handle todos
  public todos = signal<Todo[]>([]);
  //? Writable Signal to handle filter option selected
  public filterSelected = signal<FilterOption>('all');

  //? Computed Signal to get filtered todos
  public filteredTodos = computed(() => {
    if (this.filterSelected() === 'completed') {
      return this.todos().filter(todo => todo.completed);
    } else if (this.filterSelected() === 'pending') {
      return this.todos().filter(todo => !todo.completed);
    } else {
      return this.todos();
    }
  })

  constructor() {
    //? Effect to store Todos in LocalStorage
    effect(() => {
      localStorage.setItem('todos', JSON.stringify(this.todos()));
    });
  }

  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) this.todos.set(JSON.parse(storedTodos));
  }

  public onAddTodo() {
    if (!this.newTodoControl.value) return;
    this.todos.update(todos => [
      ...todos,
      {
        id: Date.now(),
        text: this.newTodoControl.value,
        completed: false, //* Default
      }
    ]);

    this.newTodoControl.reset();

  }

  public onFilterTodos(filterOption: FilterOption) {
    this.filterSelected.set(filterOption);
  }

  public onToggleTodo(id: number) {
    this.todos.update(todos => {
      return todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    })
  }


}
