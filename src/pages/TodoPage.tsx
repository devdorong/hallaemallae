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
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">오늘의 할 일</h2>
        <TodoWrite todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default TodoPage;
