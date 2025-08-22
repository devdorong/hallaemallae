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
    // enter 키를 입력시 처리
    if (e.key === 'Enter') {
      handleAdd();
    }
  };
  // tsx
  return (
    <div>
      <input type="text" value={title} onChange={e => handleChange(e)} onKeyDown={handleKeyDown} />
      <button onClick={handleAdd}>등록</button>
    </div>
  );
};

export default TodoWrite;
