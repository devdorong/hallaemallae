import { TodoType } from '@/types/todoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div>
      <h2>목록</h2>
      {todos.length === 0 ? (
        <p>등록된 할일이 없습니다.</p>
      ) : (
        todos.map(item => <TodoItem key={item.id} todo={item} todos={todos} setTodos={setTodos} />) // <div key={item.id}>{item.title}</div>
      )}
    </div>
  );
};

export default TodoList;
