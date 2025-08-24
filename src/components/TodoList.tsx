import { TodoType } from '@/types/todoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="mt-6 ">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">할일 목록</h2>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500 py-8">등록된 할일이 없습니다.</p>
      ) : (
        <ul className="space-y-3">
          {todos.map(item => (
            <TodoItem key={item.id} todo={item} todos={todos} setTodos={setTodos} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
