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
    <div>
      {isEdit ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleEditSave}>저장</button>
          <button onClick={handleEditCancel}>취소</button>
        </>
      ) : (
        <>
          <input type="checkbox" onChange={() => handleToggle(todo.id)} checked={todo.completed} />
          <span>{todo.title}</span>
          <button onClick={handleEdit}>수정</button>
          <button onClick={() => handleDelete(todo.id)}>삭제</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
