import { TodoType } from '@/types/todoType';
import { useState } from 'react';

type TodoItemProps = {
  todos: TodoType[];
  todo: TodoType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const TodoItem = ({ todos, todo, setTodos }: TodoItemProps) => {
  // ts
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleEditSave = () => {
    const arr = todos.map(item => {
      if (item.id === todo.id) {
        return { ...item, title: editTitle };
      } else {
        return item;
      }
    });
    setTodos(arr);
    setIsEdit(false);
  };
  const handleEditCancel = () => {
    setIsEdit(false);
  };
  const handleToggle = (id: number) => {
    const arr = todos.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setTodos(arr);
  };
  const handleDelete = (id: number) => {
    const arr = todos.filter(item => item.id !== id);
    setTodos(arr);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditSave();
    }
    if (e.key === 'Escape') {
      handleEditCancel();
    }
  };
  // tsx
  return (
    <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
      {isEdit ? (
        <div className="flex flex-1 items-center space-x-2">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleEditSave}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            저장
          </button>
          <button
            onClick={handleEditCancel}
            className="bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-500 transition-colors"
          >
            취소
          </button>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={() => handleToggle(todo.id)}
              checked={todo.completed}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span
              className={`flex items-center ml-4 text-lg text-gray-800 break-all ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
              {todo.title}
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              수정
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              삭제
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
