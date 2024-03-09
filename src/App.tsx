import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";

export default function App() {

  function setToDoCompleted(id: number, completed: boolean) {
    alert(`Item ${id} is now ${completed ? "completed" : "not completed"}`)
  }

  return (
    <main className="py-10 bg-slate-100 h-screen">
      <h1 className="font-semibold font-sans text-3xl text-center text-gray-800">To Do</h1>
      
      <div className="max-w-xs text-lg mx-auto mt-10">
        <div className="space-y-2"> 
          {dummyData.map(todo => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              onCompletedChange={setToDoCompleted}
            />
          ))} 
        </div>
      </div>

    </main>
  )
}