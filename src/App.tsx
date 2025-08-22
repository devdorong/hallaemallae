import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="flex justify-center items-center py-6 border-b border-gray-300 bg-white shadow-sm">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 tracking-tight">
          HalleMalle
        </h1>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <TodoPage />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
