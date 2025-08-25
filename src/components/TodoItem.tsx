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
    setEditTitle(todo.title);
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
    <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition max-w-full">
      {isEdit ? (
        <div className="flex items-center space-x-2 w-full">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 min-w-0 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleEditSave}
            className="shrink-0 bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600 transition"
          >
            저장
          </button>
          <button
            onClick={handleEditCancel}
            className="shrink-0 bg-gray-400 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-500 transition"
          >
            취소
          </button>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-between ">
          <div className="flex items-center flex-1 gap-3 min-w-0">
            <input
              type="checkbox"
              onChange={() => handleToggle(todo.id)}
              checked={todo.completed}
              className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span
              className={`flex-1 text-gray-800 text-base break-all ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.title}
            </span>
          </div>
          <div className="flex space-x-2 shrink-0">
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600 transition"
            >
              수정
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
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
