import TodoList from '../components/TodoList';
import TodoWrite from '../components/TodoWrite';
import { TodoType } from '@/types/todoType';
import { useState } from 'react';

// window
const initialTodos: TodoType[] = [
  //   { id: 0, title: '제목1', completed: true },
  //   { id: 1, title: '제목2', completed: true },
  //   { id: 2, title: '제목3', completed: true },
  //   { id: 3, title: '제목4', completed: true },
];
function TodoPage() {
  // ts
  const [todos, setTodos] = useState(initialTodos);

  // tsx
  return (
    <div>
      <h1>HalleMalle</h1>
      <div>
        <TodoWrite todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default TodoPage;
