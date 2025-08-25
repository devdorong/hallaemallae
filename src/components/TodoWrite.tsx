import { TodoType } from '@/types/todoType';
import { useState } from 'react';

type TodoWriteProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const TodoWrite = ({ todos, setTodos }: TodoWriteProps) => {
  // ts
  const [title, setTitle] = useState('');
  const handleAdd = () => {
    if (title.trim()) {
      const newTodo: TodoType = {
        id: Date.now(),
        title: title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTitle('');
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };
  // tsx
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={e => handleChange(e)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
      />
      <button
        onClick={handleAdd}
        className="shrink-0 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        등록
      </button>
    </div>
  );
};

export default TodoWrite;
